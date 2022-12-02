const SOONToken = artifacts.require("SOONToken");

module.exports = function(deployer){
    deployer.deploy(SOONToken,"SoonToken","STK",10000);
}