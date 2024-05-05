const { ethers } = require("hardhat");

const gameAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
const contractName = "Game2";

async function main() {
    const game = await ethers.getContractAt(contractName, gameAddress);

    await game.setX(25);
    await game.setY(25);

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