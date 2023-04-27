import { Signer, ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { LINK_TOKEN_ADDRESSES } from "./chainlink";

export const getUserEtherBalance = async (owner: Signer): Promise<number> => {
  return parseFloat(ethers.utils.formatEther(await owner.getBalance()));
};

export const getLinkBalance = async (
  address: string,
  hre: HardhatRuntimeEnvironment
): Promise<number> => {
  if (!hre.ethers.utils.isAddress(address)) {
    throw new Error("address should be correct address.");
  }

  const linkToken = await hre.ethers.getContractAt(
    "LinkTokenInterface",
    LINK_TOKEN_ADDRESSES[hre.network.name]
  );

  const balance = await linkToken.balanceOf(address);
  const readableBalance = hre.ethers.utils.formatEther(balance);

  return parseFloat(readableBalance);
};
