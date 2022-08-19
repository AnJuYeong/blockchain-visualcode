// 폴더명을 잡으면 기본으로 index를 먼저 잡아온다

// index.js가 model안에 model js 파일들을 모아서 사용하는 곳
const sql = require("sequelize");
// config.js에서 module.exports = config로 내보내기를 하고 
// require("../config/config")가져오면 내보낸 객체가 가져와진다.
const config = require("../config/config");
const User = require("./users");
const Post = require("./posts");

// console.log(config);
// 이렇게 두개 가져오기 가능하다.
// const {config , config2} = require("../config/config");

// 시퀄라이즈 객체 생성 옵션을 적용한 객체 만들어 놓는다.
const sequelize = new sql(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);


// 내보내기 위해서 빈객체 만든 것.
const db = {};
// 그 빈 객체에 sequelize 키값으로 sequelize 객체 만든 것을 넣어준다.
db.sequelize = sequelize;
db.User = User;
db.Post = Post;
// 이 구문이 없으면 테이블이 생성되지 않는다.
User.init(sequelize);
Post.init(sequelize);

User.associate(db);
Post.associate(db);

// 보내고 싶은 값을 다 넣은 객체를 내보낸것
module.exports = db;
