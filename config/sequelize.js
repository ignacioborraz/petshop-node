import "dotenv/config.js";
import database from "./database.js";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    database[process.env.NODE_ENV || "development"].database,
    database[process.env.NODE_ENV || "development"].user,
    database[process.env.NODE_ENV || "development"].password,
    { host: database[process.env.NODE_ENV || "development"].host, dialect: "mysql" }
);

export default sequelize;
