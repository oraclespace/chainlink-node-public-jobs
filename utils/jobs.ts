import { HardhatRuntimeEnvironment } from "hardhat/types";
import { getNetworkDirectory } from "./network";
import { BigNumber, Contract } from "ethers";

export enum JobTypes {
  GET_BOOL = "GET_BOOL",
  GET_BYTES = "GET_BYTES",
  GET_BYTES_ARRAY = "GET_BYTES_ARRAY",
  GET_UINT256 = "GET_UINT256",
  GET_DOUBLE_UINT256 = "GET_DOUBLE_UINT256",
  GET_UINT256_ARRAY = "GET_UINT256_ARRAY",
}

export const PublicJobDirectories: { [key in JobTypes]: string } = {
  [JobTypes.GET_BOOL]: "HTTP Get > Bool",
  [JobTypes.GET_BYTES]: "HTTP Get > Bytes",
  [JobTypes.GET_BYTES_ARRAY]: "HTTP Get > Bytes[]",
  [JobTypes.GET_UINT256]: "HTTP Get > Uint256",
  [JobTypes.GET_DOUBLE_UINT256]: "HTTP Get > Uint256,Uint256",
  [JobTypes.GET_UINT256_ARRAY]: "HTTP Get > Uint256[]",
};

export const PublicJobNames: { [key in JobTypes]: string } = {
  [JobTypes.GET_BOOL]: "GetBool",
  [JobTypes.GET_BYTES]: "GetBytes",
  [JobTypes.GET_BYTES_ARRAY]: "GetBytesArray",
  [JobTypes.GET_UINT256]: "GetUint256",
  [JobTypes.GET_DOUBLE_UINT256]: "GetDoubleUint256",
  [JobTypes.GET_UINT256_ARRAY]: "GetUint256Array",
};

export const PublicJobRequestMethods: { [key in JobTypes]: string } = {
  [JobTypes.GET_BOOL]: "requestValue",
  [JobTypes.GET_BYTES]: "requestBytes",
  [JobTypes.GET_BYTES_ARRAY]: "requestBytes",
  [JobTypes.GET_UINT256]: "requestValue",
  [JobTypes.GET_DOUBLE_UINT256]: "requestValues",
  [JobTypes.GET_UINT256_ARRAY]: "requestBytes",
};

/**
 *
 * @param jobType
 * @returns {any[]}
 * @throws {Error}
 */
export const getExampleRequestDataArguments = (jobType: JobTypes): any[] => {
  switch (jobType) {
    case JobTypes.GET_BOOL:
      return [
        "https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/bool-values.json",
        "data,trueValue",
      ];

    case JobTypes.GET_BYTES:
      return [
        "https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/data-for-bytes.json",
        "data,project,name",
      ];

    case JobTypes.GET_BYTES_ARRAY:
      return [
        "https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/array-of-strings.json",
        "data,names",
      ];

    case JobTypes.GET_UINT256:
      return [
        "https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/numbers.json",
        BigNumber.from(100),
        "data,prices,LINK",
      ];

    case JobTypes.GET_DOUBLE_UINT256:
      return [
        "https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/numbers.json",
        "data,prices,LINK",
        "data,prices,ETH",
        BigNumber.from(100),
      ];

    case JobTypes.GET_UINT256_ARRAY:
      return [
        "https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/numbers.json",
        "data,prices,otherPrices",
      ];

    default:
      throw new Error(
        `unknown job type. Expected one of: ${Object.keys(JobTypes).join(", ")}`
      );
  }
};

export const getJobContractPath = (
  jobType: JobTypes,
  hre: HardhatRuntimeEnvironment
): string => {
  const networkDirectory = getNetworkDirectory(hre.network.name);
  const contractPath = `networks/${networkDirectory}/${PublicJobDirectories[jobType]}/${EXAMPLE_CONTRACT_NAME}.sol:${PublicJobNames[jobType]}`;

  return contractPath;
};

export const getOraclePayment = async (
  job: Contract,
  hre: HardhatRuntimeEnvironment
): Promise<number> => {
  const oraclePayment: BigNumber = await job.ORACLE_PAYMENT();
  const readableOraclePayment = parseFloat(
    hre.ethers.utils.formatEther(oraclePayment)
  );

  return readableOraclePayment;
};

export const EXAMPLE_CONTRACT_NAME = "client-example";
