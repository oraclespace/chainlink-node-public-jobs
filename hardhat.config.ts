import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "./tasks/job";
import { HardhatUserConfig } from "hardhat/config";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  paths: {
    sources: "./networks",
  },

  solidity: {
    compilers: [
      {
        version: "0.8.19",
      },
      {
        version: "0.8.9",
      },
      {
        version: "0.7.6",
      },
      {
        version: "0.4.24",
      },
    ],
  },

  defaultNetwork: "hardhat",

  networks: {
    hardhat: {},

    mainnet: {
      url: String(process.env.ETH_NODE_ETHEREUM_URL_HTTPS),
      accounts: [
        String(process.env.ACCOUNT_OWNER_PRIVATE_KEY),
        String(process.env.ACCOUNT_OTHER_PRIVATE_KEYS),
      ],
    },

    goerli: {
      url: String(process.env.ETH_NODE_GOERLI_URL_HTTPS),
      accounts: [
        String(process.env.ACCOUNT_OWNER_PRIVATE_KEY),
        String(process.env.ACCOUNT_OTHER_PRIVATE_KEYS),
      ],
    },

    sepolia: {
      url: String(process.env.ETH_NODE_ETHEREUM_SEPOLIA_URL_HTTPS),
      accounts: [
        String(process.env.ACCOUNT_OWNER_PRIVATE_KEY),
        String(process.env.ACCOUNT_OTHER_PRIVATE_KEYS),
      ],
    },

    polygon: {
      url: String(process.env.ETH_NODE_POLYGON_URL_HTTPS),
      accounts: [
        String(process.env.ACCOUNT_OWNER_PRIVATE_KEY),
        String(process.env.ACCOUNT_OTHER_PRIVATE_KEYS),
      ],
    },

    mumbai: {
      url: String(process.env.ETH_NODE_MUMBAI_URL_HTTPS),
      accounts: [
        String(process.env.ACCOUNT_OWNER_PRIVATE_KEY),
        String(process.env.ACCOUNT_OTHER_PRIVATE_KEYS),
      ],
    },

    arbitrumGoerli: {
      url: String(process.env.ETH_NODE_ARBITRUM_GOERLI_URL_HTTPS),
      accounts: [
        String(process.env.ACCOUNT_OWNER_PRIVATE_KEY),
        String(process.env.ACCOUNT_OTHER_PRIVATE_KEYS),
      ],
    },
  },

  etherscan: {
    apiKey: {
      mainnet: String(process.env.ETHERSCAN_API_KEY),
      goerli: String(process.env.ETHERSCAN_API_KEY),
      sepolia: String(process.env.ETHERSCAN_API_KEY),
      polygon: String(process.env.POLYGONSCAN_API_KEY),
      polygonMumbai: String(process.env.POLYGONSCAN_API_KEY),
      arbitrumGoerli: String(process.env.ARBISCAN_API_KEY),
    },
  },
};

export default config;
