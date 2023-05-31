import User from "../models/user.js";
import Pet from "../models/pet.js";
import "../config/asociations.js";
import sequelize from "../config/sequelize.js";
import { faker } from "@faker-js/faker";

const createData = async (users, pets) => {
    try {
        await sequelize.sync({ force: true });
        for (let i = 1; i <= users; i++) {
            const randomName = faker.person.firstName();
            const randoMail = faker.internet.exampleEmail();
            const user = await User.create({ name: randomName, mail: randoMail });
            for (let j = 1; j <= pets; j++) {
                const randomName = faker.person.firstName();
                const randomTag = faker.animal.type();
                await Pet.create({ name: randomName, tag: randomTag, userId: user.id });
            }
        }
        console.log("data created!");
    } catch (error) {
        console.log(error);
    }
};
createData(15, 8);
