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
            underscored : false,
            charset : "utf8",
            collate : "utf8_general_ci"
        })
    }
    static associate(db){
        db.Board.belongsTo(db.User,{ foreignKey : "user_id", targetKey : "id"})
    }
}

module.exports = Board;