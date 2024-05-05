const { ethers } = require("hardhat");

const gameAddress = "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1";
const contractName = "Game4";

async function main() {
    const game = await ethers.getContractAt(contractName, gameAddress);

    const tx = await game.win((255 + 1 + 10) - 210);
    const receipt = await tx.wait();

    console.log(receipt.logs);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });