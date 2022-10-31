const Sequelize = require("sequelize");

class User extends Sequelize.Model{
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
            },
            user_point : {
                type : Sequelize.INTEGER,
                defaultValue : 0
            },
            user_picture : {
                type : Sequelize.STRING,
                defaultValue : "https://static.nid.naver.com/images/web/user/default.png?type=s160"
            }
        },
        {
            sequelize,
            timestamps : true,
            modelName : "User",
            tableName : "users",
            underscored : false,
            charset : "utf8",
            collate : "utf8_general_ci"
        })
    };
    static associate(db){
        db.User.hasMany(db.Nft,{foreignKey : "user_nft", sourceKey : "id"})
        db.User.hasMany(db.Board,{foreignKey : "user_id", sourceKey : "id"})
    }
}

module.exports = User;