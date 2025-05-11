const hre = require("hardhat");

async function main() {
  await hre.run('compile');

  const NotesVault = await hre.ethers.getContractFactory("NotesVault");
  const notesVault = await NotesVault.deploy();

  await notesVault.deployed();
  console.log("NotesVault deployed to:", notesVault.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
