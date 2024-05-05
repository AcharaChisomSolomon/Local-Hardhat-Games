const { ethers } = require("hardhat");

const gameAddress = "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c";
const contractName = "Game5";

async function main() {
    const game = await ethers.getContractAt(contractName, gameAddress);

    const [owner] = await ethers.getSigners();

    await game.connect(owner).giveMeAllowance(10000)
    await game.connect(owner).mint(10000);

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