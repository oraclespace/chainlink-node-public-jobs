import { TransactionRequest } from "@ethersproject/providers";
import { Contract, logger } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { getUserEtherBalance } from "./balance";

export const estimateTxGasFee = async (
  txRequest: TransactionRequest,
  hre: HardhatRuntimeEnvironment
): Promise<number> => {
  logger.info("estimating gas fee for transaction...");

  const txGasUnits = await hre.ethers.provider.estimateGas(txRequest);
  const gasPricePerUnit = await getCurrentGasPricePerUnit(hre);

  const txGasPrice = txGasUnits.toNumber() * gasPricePerUnit;

  const readableTxGasPrice = parseFloat(
    hre.ethers.utils.formatUnits(Math.floor(txGasPrice), "gwei")
  );

  return readableTxGasPrice;
};

export const estimateContractMethodGasFee = async (
  contract: Contract,
  method: string,
  methodArguments: any[],
  hre: HardhatRuntimeEnvironment
): Promise<number> => {
  logger.info("estimating gas fee for transaction...");

  if (!(method in contract.estimateGas)) {
    throw new Error(`method ${method} not found in contract`);
  }

  const txGasUnits = await contract.estimateGas[method](...methodArguments);
  const gasPricePerUnit = await getCurrentGasPricePerUnit(hre);
  const txGasFee = txGasUnits.toNumber() * gasPricePerUnit;

  const readableTxGasFee = hre.ethers.utils.formatUnits(
    Math.floor(txGasFee),
    "gwei"
  );

  return parseFloat(readableTxGasFee);
};

/**
 *
 * @param hre
 * @returns {Promise<number>} gas price per unit in GWEI
 * @throws {Error}
 */
export const getCurrentGasPricePerUnit = async (
  hre: HardhatRuntimeEnvironment
): Promise<number> => {
  const feeData = await hre.ethers.provider.getFeeData();

  if (feeData.maxFeePerGas === null) {
    throw new Error("not received maxFeePerGas from Fee Data");
  }

  const gasPricePerUnit = parseFloat(
    hre.ethers.utils.formatUnits(feeData.maxFeePerGas, "gwei")
  );

  return gasPricePerUnit;
};
