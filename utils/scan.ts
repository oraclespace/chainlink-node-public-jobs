import { logger } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const NetworkScans = {
  mainnet: "mainnet",
  goerli: "goerli",
  sepolia: "sepolia",
  polygon: "polygon",
  mumbai: "polygonMumbai",
  arbitrumGoerli: "arbitrumGoerli",
};

export const getScanApiKey = (
  hre: HardhatRuntimeEnvironment
): string | undefined => {
  const network = hre.network.name;

  if (!(network in NetworkScans)) {
    logger.throwError(`unknown network for scan: ${network}`);
  }

  const scanNetwork = NetworkScans[network];

  return hre.config.etherscan.apiKey[scanNetwork] || undefined;
};
