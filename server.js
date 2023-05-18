import app from "./app.js";
import sequelize from "./config/sequelize.js";

const port = process.env.PORT || 8080;
const ready = () => console.log("server ready on port " + port);

app.listen(port, ready);
sequelize.authenticate()
    .then(() => console.log("database connected"))
    .catch(error => console.log(error));
