const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const contractName = "Game5";

module.exports = buildModule("LockModule", (m) => {
  const game = m.contract(contractName);

  return { game }
});
