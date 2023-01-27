async function main() {
    const crossmintTestNFT = await ethers.getContractFactory("CrossmintTestNFT");

    // Start deployment, returning a promise that resolves to a contract object
    const contract = await crossmintTestNFT.deploy();
    console.log(contract);
    await contract.deployed();
    console.log("Contract deployed to address:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
