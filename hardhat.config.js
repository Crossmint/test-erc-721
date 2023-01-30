require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { GOERLI_URL, PRIVATE_KEY } = process.env;
module.exports = {
    solidity: "0.8.1",
    defaultNetwork: "goerli",
    networks: {
        hardhat: {},
        goerli: {
            url: `${GOERLI_URL}`,
            accounts: [`0x${PRIVATE_KEY}`],
            gasPrice: 75000000000,
        },
    },
};
