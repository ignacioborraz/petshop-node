import { __dirname } from "../utils.js";

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            version: "1.0.0",
            title: "Swagger Petstore",
            license: {
                name: "MIT"
            }
        }
    },
    apis: [`${__dirname}/docs/**/*.yaml`]
};

export default swaggerOptions;
