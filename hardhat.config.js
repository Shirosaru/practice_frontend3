require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`, // Use your Infura API key here
      accounts: [`0x${process.env.PRIVATE_KEY}`] // Use your private key here
    },
  },
};
