const Sequelize = require("sequelize");

class Nft extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            nft_name : {
                type : Sequelize.STRING(20),
                unique : true,
                allowNull : false,
            },
            nft_img : {
                type : Sequelize.STRING(20),
                allowNull : false,
            },
            user_name : {
                type : Sequelize.STRING(20),
                allowNull : false,
            }
        },
        {
            sequelize,
            timestamps : true,
            modelName : "Nft",
            tableName : "nfts",
            charset : "utf8",
            collate : "utf8_general_ci"
        })
    }
}

module.exports = Nft;