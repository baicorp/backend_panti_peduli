import { Sequelize } from "sequelize";

const db = new Sequelize('peduli_panti', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
});

export default db;