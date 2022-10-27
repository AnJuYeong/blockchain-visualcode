const Sequelize = require("sequelize");

class Board extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            user : {
                type : Sequelize.STRING(20),
                allowNull : false,
            },
            title : {
                type : Sequelize.STRING(20),
                allowNull : false,
            },
            contents : {
                type : Sequelize.STRING,
                allowNull : false,
            },
            like : {
                type : Sequelize.INTEGER,
                allowNull : false,
                defaultValue : 0
            }
        },
        {
            sequelize,
            timestamps : true,
            modelName : "Board",
            tableName : "boards",
            charset : "utf8",
            collate : "utf8_general_ci"
        })
    }
}

module.exports = Board;