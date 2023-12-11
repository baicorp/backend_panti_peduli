import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Article = db.define('article',{
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
},
{
    freezeTableName: true
});

export default Article;

(async()=>{
    await db.sync();
})();