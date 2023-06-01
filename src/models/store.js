import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.js";

class Store extends Model {
}

Store.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adress: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    modelName: "Store",
    timestamps: true,
    sequelize
});

export default Store;
