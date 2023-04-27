import hre from "hardhat";

export const LINK_TOKEN_ADDRESSES: {
  [key: keyof typeof hre.config.networks]: string;
} = {
  mainnet: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
  goerli: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
  sepolia: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
  polygon: "0xb0897686c545045aFc77CF20eC7A532E3120E0F1",
  mumbai: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
  arbitrumGoerli: "0xd14838A68E8AFBAdE5efb411d5871ea0011AFd28",
};

export const OPERATOR_NODES: {
  [key: keyof typeof hre.config.networks]: string[];
} = {
  hardhat: ["0x0000000000000000000000000000000000000001"],
};
