import { ethers } from "hardhat";

async function main() {

	const Addition = await ethers.getContractFactory("Addition");
	const addition = await Addition.deploy();

	await addition.deployed();

	console.log(`Addition contract deployed deployed at: ${addition.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exitCode = 0)
.catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
