import "dotenv/config.js";
import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import { engine } from "express-handlebars";
import { __dirname } from "./utils.js";
import swaggerOptions from "./config/swagger.js";
import swaggerJSDoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import router from "./router/index.js";
import cors from "cors";
import logger from "morgan";

const app = express();

/**
 * setting template engine
 */
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

/**
 * using middlewares
 */
app.use(cors());
app.use(logger("dev"));
app.use("/public", express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * setting documentation
 */
const specs = swaggerJSDoc(swaggerOptions);
app.use("/apidocs", serve, setup(specs));

/**
 * setting router
 */
app.use(router);
app.use(errorHandler);
app.use(notFoundHandler);

export default app;
