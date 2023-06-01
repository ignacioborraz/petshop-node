import Pet from "../models/pet.js";
import User from "../models/user.js";
import Store from "../models/store.js";

User.hasMany(Pet, { foreignKey: "userId" });
Pet.belongsTo(User, { foreignKey: "userId" });

Store.hasMany(Pet, { foreignKey: "storeId" });
Pet.belongsTo(Store, { foreignKey: "storeId" });

Store.belongsToMany(User, { through: "users_stores" });
User.belongsToMany(Store, { through: "users_stores" });
