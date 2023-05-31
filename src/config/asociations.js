import Pet from "../models/pet.js";
import User from "../models/user.js";

User.hasMany(Pet, { foreignKey: "userId" });
Pet.belongsTo(User, { foreignKey: "userId" });
