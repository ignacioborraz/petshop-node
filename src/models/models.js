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

User.hasMany(Pet, { foreignKey: "userId" });
Pet.belongsTo(User, { foreignKey: "userId" });

export { Pet, User };
