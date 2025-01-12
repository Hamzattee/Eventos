import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { SCROLL_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  // solidity: "0.8.20",

  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },

  networks: {
    scroll: {
      url: SCROLL_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  // etherscan: {
  //   apiKey: {
  //     sepolia: ETHERSCAN_API_KEY,
  //   },
  // },
};

export default config;
