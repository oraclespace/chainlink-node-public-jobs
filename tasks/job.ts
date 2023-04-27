import { BigNumber, logger } from "ethers";
import { task, types } from "hardhat/config";
import {
  JobTypes,
  PublicJobRequestMethods,
  getExampleRequestDataArguments,
  getJobContractPath,
  getOraclePayment,
} from "../utils/jobs";
import { estimateContractMethodGasFee, estimateTxGasFee } from "../utils/gas";
import { getLinkBalance, getUserEtherBalance } from "../utils/balance";
import { requestUserTrueAnswer } from "../utils/answers";
import { LINK_TOKEN_ADDRESSES } from "../utils/chainlink";
import { getScanApiKey } from "../utils/scan";

task("job:deploy", "Deploy job by type")
  .addParam(
    "type",
    `Job type. Available: ${Object.keys(JobTypes).join(", ")}`,
    "",
    types.string
  )
  .setAction(async (args, hre) => {
    await hre.run("compile");

    if (!(args.type in JobTypes)) {
      logger.throwError(
        `unknown job type. Expected one of: ${Object.keys(JobTypes).join(", ")}`
      );
    }

    logger.info("network:", hre.network.name);

    const jobType = JobTypes[args.type as JobTypes];
    const [owner] = await hre.ethers.getSigners();
    const contractPath = getJobContractPath(jobType, hre);

    logger.info(`contract path is ${contractPath}`);
    logger.info(`contract owner will be ${owner.address}`);

    const PublicJob = await hre.ethers.getContractFactory(contractPath);

    const deployTransaction = PublicJob.getDeployTransaction();
    const deployGasFee = await estimateTxGasFee(deployTransaction, hre);
    const userBalance = await getUserEtherBalance(owner);

    if (userBalance < deployGasFee) {
      logger.throwError(
        `unable to deploy contract. Not enough funds for pay gas fee. Required ${deployGasFee}, but available only ${userBalance}`
      );
    }

    logger.info(
      `the gas fee will be around: ${deployGasFee}. Your current balance: ${userBalance}`
    );

    await requestUserTrueAnswer("Are you sure to deploy contract?");

    logger.info("deploy in progress...");

    const publicJob = await PublicJob.deploy();
    await publicJob.deployed();

    const newUserBalance = await getUserEtherBalance(owner);
    logger.info(
      `your new balance is ${newUserBalance}\nactually gas fee is ${
        userBalance - newUserBalance
      }`
    );

    logger.info(`deployed contract address: ${publicJob.address}. Remember it`);

    try {
      const scanApiKey = getScanApiKey(hre);
      if (scanApiKey === undefined) {
        logger.throwError("unable to verify contract");
      }

      await hre.run("verify", {
        address: publicJob.address,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.info(`unable to verify contract. ${error.message}`);
      }
    }

    try {
      const jobOraclePayment = await getOraclePayment(publicJob, hre);
      const ownerLinkBalance = await getLinkBalance(owner.address, hre);

      if (ownerLinkBalance < jobOraclePayment) {
        logger.throwError(
          `unable to offer fund job contract with LINK. Your balance is not enough: ${ownerLinkBalance} LINK, but required ${jobOraclePayment} LINK`
        );
      }

      await requestUserTrueAnswer(
        `do you want to fund contract with LINK? Required: ${jobOraclePayment} LINK. Your balance: ${ownerLinkBalance} LINK`
      );

      await hre.run("job:fund-link", {
        contract: publicJob.address,
        amount: jobOraclePayment,
      });
    } catch (error) {
      if (error instanceof Error) {
        logger.throwError(error.message);
      }
    }

    try {
      await requestUserTrueAnswer(
        `do you want to execute example request data?`
      );

      await hre.run("job:execute-request-data", {
        type: jobType,
        address: publicJob.address,
      });
    } catch (error) {
      if (error instanceof Error) {
        logger.throwError(error.message);
      }
    }
  });

/**
 * @todo task requestData
 */
task("job:fund-link", "Fund Job with LINK")
  .addParam(
    "contract",
    "Contract that needs to be fund with LINK",
    "",
    types.string
  )
  .addParam(
    "amount",
    "LINK token amount for transfer. Example: 0.15",
    "",
    types.float
  )
  .setAction(async (args, hre) => {
    if (!hre.ethers.utils.isAddress(args.contract)) {
      logger.throwError("contract param should be address");
    }

    if (args.amount < 0) {
      logger.throwError("amount should be positive float number");
    }

    const [owner] = await hre.ethers.getSigners();
    const userBalance = await getUserEtherBalance(owner);

    const linkToken = await hre.ethers.getContractAt(
      "LinkTokenInterface",
      LINK_TOKEN_ADDRESSES[hre.network.name]
    );

    const readableBalance = await getLinkBalance(owner.address, hre);
    const readableContractBalance = await getLinkBalance(args.contract, hre);

    logger.info(
      `your LINK balance is ${readableBalance}\ncontract balance is ${readableContractBalance}`
    );

    const amountForTransfer = hre.ethers.utils.parseUnits(
      args.amount.toString(),
      "ether"
    );

    await requestUserTrueAnswer(
      `are you sure to transfer ${args.amount} LINK to ${args.contract}?`
    );

    logger.info("transaction in progress...");

    const txTransfer = await linkToken.transfer(
      args.contract,
      amountForTransfer
    );
    await txTransfer.wait();

    const newUserBalance = await getUserEtherBalance(owner);
    logger.info(
      `your new balance is ${newUserBalance}\nactually gas fee is ${
        userBalance - newUserBalance
      }`
    );

    const readableUpdatedContractBalance = await getLinkBalance(
      args.contract,
      hre
    );

    logger.info(
      `new contract balance is ${readableUpdatedContractBalance} LINK`
    );
  });

task("job:execute-request-data")
  .addParam(
    "type",
    `Job type. Available: ${Object.keys(JobTypes).join(", ")}`,
    "",
    types.string
  )
  .addParam("address", "Job address", "", types.string)
  .setAction(async (args, hre) => {
    if (!(args.type in JobTypes)) {
      logger.throwError(
        `unknown job type: ${args.type}. Expected one of: ${Object.keys(
          JobTypes
        ).join(", ")}`
      );
    }

    if (!hre.ethers.utils.isAddress(args.address)) {
      logger.throwError("address should be address");
    }

    logger.info("network:", hre.network.name);

    const jobType = JobTypes[args.type as JobTypes];

    const contractPath = getJobContractPath(jobType, hre);
    const publicJob = await hre.ethers.getContractAt(
      contractPath,
      args.address
    );

    const readableOraclePayment = await getOraclePayment(publicJob, hre);
    const jobLinkBalance = await getLinkBalance(publicJob.address, hre);

    logger.info(
      `oracle Payment is ${readableOraclePayment} LINK\njob balance is ${jobLinkBalance} LINK`
    );

    if (jobLinkBalance < readableOraclePayment) {
      logger.throwError(
        "unable to processing transaction. Not enough LINK for perform"
      );
    }

    const [owner] = await hre.ethers.getSigners();

    const requestDataMethod = PublicJobRequestMethods[jobType];
    const requestDataArguments = getExampleRequestDataArguments(jobType);

    logger.info(`request method: ${requestDataMethod}`);
    logger.info(`request arguments`, requestDataArguments);

    const txGasFee = await estimateContractMethodGasFee(
      publicJob,
      requestDataMethod,
      requestDataArguments,
      hre
    );

    const userBalance = await getUserEtherBalance(owner);

    logger.info(
      `gas fee will be ${txGasFee}. Your current balance is ${userBalance}`
    );

    await requestUserTrueAnswer(
      "Are you sure you want to processing transaction?"
    );

    logger.info("transaction in progress...");

    const txRequestData = await publicJob[requestDataMethod](
      ...requestDataArguments
    );
    await txRequestData.wait();

    logger.info("transaction completed");

    const newUserBalance = await getUserEtherBalance(owner);
    logger.info(
      `your new balance is ${newUserBalance}\nactually gas fee is ${
        userBalance - newUserBalance
      }`
    );
  });
