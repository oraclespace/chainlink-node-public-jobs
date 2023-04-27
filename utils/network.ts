// import {HardhatNetworkConfig} from "hardhat/types";

export const LOCAL_NETWORKS = ["hardhat"];

// export const isNetworkLocal = (): boolean =>
//   LOCAL_NETWORKS.includes(hre.network.name);

const NetworkDirectories: {
  [key: string]: string | undefined;
} = {
  hardhat: undefined,
  localhost: undefined,
  mainnet: "ethereum-mainnet",
  goerli: "ethereum-goerli",
  sepolia: "ethereum-sepolia",
  polygon: "polygon-mainnet",
  mumbai: "polygon-mumbai",
  arbitrumGoerli: "arbitrum-goerli",
};

/**
 *
 * @param {string} network
 * @returns {string}
 * @throws {Error}
 */
export const getNetworkDirectory = (network: string): string => {
  if (
    network in NetworkDirectories &&
    NetworkDirectories[network] !== undefined
  ) {
    return NetworkDirectories[network] as string;
  }

  throw new Error(`not found directory for network ${network}`);
};
