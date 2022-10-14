// 설치해야할 것
// sequelize, mysql2 둘다 설치

const Sequelize = require("sequelize");
const config = require("../config");
const user = require("./user");

const sequelize = new Sequelize(config.dev.database, config.dev.username, config.dev.password, config.dev);

const db = {};

db.sequelize = sequelize;
db.user = user;

user.init(sequelize);

module.exports = db;