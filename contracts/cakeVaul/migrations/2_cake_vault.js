const CakeVault = artifacts.require("CakeVault");
const SecAddr='0x1Ce67F0473BF157b7A2cB516844A8Df8e24878e7'

const markAddrs='0x1963cE68e562D41F7ddD3696a607237B0d987239'

const projectAddrs='0x195B7D3fBa430f557f9D2Fe224c65EE24E31f485'

const partAddr='0x8156B0b62bb9cDe966B90Cf0A280caA060079AbF'

const devAddr='0x09f46B627A9853A84CAa380006f7d97d7316C184'


const token = '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82'


module.exports = function (deployer) {
  deployer.deploy(
    CakeVault,
    devAddr,
    SecAddr,
    markAddrs,
    projectAddrs,
    partAddr,
    token);
};
