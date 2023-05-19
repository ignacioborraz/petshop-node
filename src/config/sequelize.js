import "dotenv/config.js";
import config from "./database.js";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    config[process.env.NODE_ENV || "development"].database,
    config[process.env.NODE_ENV || "development"].user,
    config[process.env.NODE_ENV || "development"].password,
    { host: config[process.env.NODE_ENV || "development"].host, dialect: "mysql" }
);

export default sequelize;
