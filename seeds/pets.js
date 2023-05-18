import Pet from "../models/pet.js";
import sequelize from "../config/sequelize.js";

const createPets = async () => {
    try {
        await sequelize.sync();
        await Pet.create({ name: "name1", tag: "tag1" });
        await Pet.create({ name: "name2", tag: "tag2" });
        await Pet.create({ name: "name3", tag: "tag3" });
        await Pet.create({ name: "name4", tag: "tag4" });
        await Pet.create({ name: "name5", tag: "tag5" });
        await Pet.create({ name: "name6", tag: "tag6" });
        await Pet.create({ name: "name7", tag: "tag7" });
        await Pet.create({ name: "name8", tag: "tag8" });
        await Pet.create({ name: "name9", tag: "tag9" });
    } catch (error) {
        console.log(error);
    }
};

createPets();
