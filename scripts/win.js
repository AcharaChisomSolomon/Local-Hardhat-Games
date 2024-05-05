const { ethers } = require("hardhat");

const gameAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const contractName = "Game1";

async function main() {
    const game = await ethers.getContractAt(contractName, gameAddress);

    const tx = await game.win();
    const receipt = await tx.wait();

    console.log(receipt.logs);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });