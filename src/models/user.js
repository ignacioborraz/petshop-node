import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize.js";

class User extends Model {
}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    modelName: "User",
    timestamps: true,
    sequelize
});

export default User;
