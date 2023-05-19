import Pet from "../models/pet.js";
import sequelize from "../config/sequelize.js";
import { faker } from "@faker-js/faker";

const createPets = async () => {
    try {
        await sequelize.sync();
        for (let i = 1; i <= 300; i++) {
            const randomName = faker.person.firstName();
            const randomTag = faker.animal.type();
            await Pet.create({ name: randomName, tag: randomTag });
        }
        console.log("data created!");
    } catch (error) {
        console.log(error);
    }
};

createPets();
