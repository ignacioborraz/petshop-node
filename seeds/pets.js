import Pet from "../models/pet.js";
import sequelize from "../config/sequelize.js";

const createPets = async () => {
    try {
        await sequelize.sync();
        for (let i = 1; i <= 150; i++) {
            if (i % 7 === 0) {
                await Pet.create({ name: "name " + parseInt(Math.random() * 10), tag: "tag " + i });
            } else if (i % 11 === 0) {
                await Pet.create({ name: "name " + i });
            } else {
                await Pet.create({ name: "name " + i, tag: "tag " + i });
            }
        }
    } catch (error) {
        console.log(error);
    }
};

createPets();
