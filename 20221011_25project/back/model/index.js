// 설치해야할 것
// sequelize, mysql2 둘다 설치

const Sequelize = require("sequelize");
const config = require("../config");
const User = require("./user");
const Board = require("./boards");
const Nft = require("./nft");

const sequelize = new Sequelize(config.dev.database, config.dev.username, config.dev.password, config.dev);

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Board = Board;
db.Nft = Nft;

User.init(sequelize);
Board.init(sequelize);
Nft.init(sequelize);

module.exports = db;