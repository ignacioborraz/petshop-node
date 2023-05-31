import app from "./app.js";
import sequelize from "./src/config/sequelize.js";

const port = process.env.PORT || 8080;
const ready = () => {
    console.log("server ready on port " + port);
    sequelize.sync({ force: false })
        .then(() => console.log("database connected"))
        .catch(error => console.log(error));
};

app.listen(port, ready);
