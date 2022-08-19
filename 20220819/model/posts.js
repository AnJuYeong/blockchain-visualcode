const sql = require("sequelize");

class Post extends sql.Model{
    static init(sequelize){
        return super.init(
            {
                msg : {
                    type : sql.STRING(100),
                    allowNull : false,
                }
            },
            {
                sequelize,
                timestamps : true,
                modelName : "Post",
                tableName : "posts",
                paranoid : false,
                charset : "utf8",
                collate : "utf8_general_ci",
            }
        )
    };
    static associate(db){
        // belongsTo 함수를사용해서 User 테이블과 연결 이 테이블이 자식
        // 첫번째  매개변수는 연결될 테이블 이름 
        // 유저의 id가 타겟이고 연결해주는 키는 user_id다.
        db.Post.belongsTo(db.User, { foreignKey : "user_id", targetKey : "id"});
    }
}

module.exports = Post;