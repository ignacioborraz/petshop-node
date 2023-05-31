import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.js";

class Pet extends Model {
}

Pet.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tag: DataTypes.STRING
}, {
    modelName: "Pet",
    timestamps: true,
    sequelize
});

export default Pet;
