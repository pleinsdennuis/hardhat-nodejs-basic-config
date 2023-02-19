import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
	defaultNetwork: "hardhat",
	networks: {
		localhost: {
			url: "http://127.0.0.1:8545",
			chainId: 31337
		}
	},
	solidity: {
		compilers: [
			{
				version: "0.8.17"
			}
		]
	}
};

export default config;
