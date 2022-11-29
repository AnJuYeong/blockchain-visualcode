const Voting = artifacts.require("Voting");

module.exports = function(deployed){
    deployed.deploy(Voting, ["주영","종찬","하진"]);
}