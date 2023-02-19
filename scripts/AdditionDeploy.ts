import { ethers } from "hardhat";

async function main() {

	const SmartContractName = await ethers.getContractFactory("SmartContractName");
	const smartContractName = await SmartContractName.deploy();

	await smartContractName.deployed();

	console.log(`Addition contract deployed deployed at: ${smartContractName.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exitCode = 0)
.catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
