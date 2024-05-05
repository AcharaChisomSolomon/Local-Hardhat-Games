const { ethers } = require("hardhat");

const gameAddress = "0x9A676e781A523b5d0C0e43731313A708CB607508";
const contractName = "Game3";

async function main() {
    const game = await ethers.getContractAt(contractName, gameAddress);

    const tx = await game.win(255 - 210);
    const receipt = await tx.wait();

    console.log(receipt.logs);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });