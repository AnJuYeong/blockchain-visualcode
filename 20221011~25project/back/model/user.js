const { STRING } = require("sequelize");
const Sequelize = require("sequelize");

class user extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            user_name : {
                type : Sequelize.STRING(20),
                allowNull : false,
            },
            user_id : {
                type : Sequelize.STRING(20),
                unique : true,
                allowNull : false,
            },
            user_pw : {
                type : Sequelize.STRING(20),
                allowNull : false,
            }
        },
        {
            sequelize,
            timestamps : true,
            modelName : "User",
            tableName : "users",
            charset : "utf8",
            collate : "utf8_general_ci"
        })
    }
}

module.exports = user;