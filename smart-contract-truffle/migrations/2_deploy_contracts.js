const ethers = require('ethers');

var PrivateSale = artifacts.require('PrivateSale');
module.exports = function(deployer) {
    deployer.deploy(PrivateSale, ethers.utils.parseUnits('0.1', 6), '0x55a188076A97E1A742Da7013d4eeD8c18837f83b', '0x51c53b90478acc57e2cc7e1736e4b26c6e633eac');
    // Additional contracts can be deployed here
};