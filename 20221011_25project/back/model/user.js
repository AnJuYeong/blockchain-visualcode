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
            charset : "utf8",
            collate : "utf8_general_ci"
        })
    }
}

module.exports = User;