import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "dotenv/config";

const RPC_ENDPOINT_SEPOLIA_NETWORK = process.env.RPC_URL_SEPOLIA_NETWORK|| "https://testing.com";
const PRIVATE_KEY_ACCOUNT_SEPOLIA = process.env.PRIVATE_KEY_SEPOLIA_NETWORK || "0x";
const API_KEY_ETHERSCAN = process.env.ETHERSCAN_API_KEY || "0x";
const API_KEY_COINMARKET_CAP = process.env.COIN_MARKET_CAP_API_KEY || "0x";

// Mainnet
const PRIVATE_KEY_PRODUCTION = process.env.PRIVATE_KEY_PRODUCTION || "0x";
const RPC_URL_ETHEREUM = process.env.RPC_URL_ETHEREUM || "https://testing.com";


const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mainnet: {
      url: RPC_URL_ETHEREUM,
      accounts: [PRIVATE_KEY_PRODUCTION],
      chainId: 1,
    },
    hardhatLocal: {
      url: "http://127.0.0.1:8545/",
      chainId: 1337,
    },
    sepolia: {
      chainId: 11155111,
      url: RPC_ENDPOINT_SEPOLIA_NETWORK,
      accounts: [PRIVATE_KEY_ACCOUNT_SEPOLIA],      
    }
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  }
};

export default config;
