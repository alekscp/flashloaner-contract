const FlashLoaner = artifacts.require("FlashLoaner");
const SafeMath = artifacts.require("@openzeppelin/contracts/math/SafeMath.sol");
const UniswapV2Library = artifacts.require("UniswapV2Library");

module.exports = function (deployer) {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, UniswapV2Library);
  deployer.deploy(UniswapV2Library);
  deployer.link(UniswapV2Library, FlashLoaner);
  deployer.deploy(FlashLoaner, process.env.PANCAKE_FACTORY, process.env.PANCAKE_ROUTER, process.env.JUL_ROUTER);  
};


