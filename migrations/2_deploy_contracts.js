const Certchain = artifacts.require("../contracts/Certchain.sol");

module.exports = function (deployer) {
  deployer.deploy(Certchain);
};
