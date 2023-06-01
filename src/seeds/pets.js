import User from "../models/user.js";
import Pet from "../models/pet.js";
import Store from "../models/store.js";
import "../config/asociations.js";
import sequelize from "../config/sequelize.js";
import { faker } from "@faker-js/faker";

const createData = async (users, stores, pets) => {
    try {
        await sequelize.sync({ force: true });
        const allStores = [];
        for (let i = 1; i <= stores; i++) {
            const randomName = faker.person.firstName();
            const randomAdress = faker.location.direction();
            allStores.push(await Store.create({ name: randomName, adress: randomAdress }));
        }
        const allUsers = [];
        for (let j = 1; j <= users; j++) {
            const randomName = faker.person.firstName();
            const randomMail = faker.internet.exampleEmail();
            allUsers.push(await User.create({ name: randomName, mail: randomMail }));
        }
        allStores.forEach(each => allUsers.forEach(one => one.addStore(each)));
        for (let i = 1; i <= pets; i++) {
            const randomName = faker.person.firstName();
            const randomTag = faker.animal.type();
            const userId = Math.ceil(Math.random() * users);
            const storeId = Math.ceil(Math.random() * stores);
            await Pet.create({ name: randomName, tag: randomTag, userId, storeId });
        }
        console.log("data created!");
    } catch (error) {
        console.log(error);
    }
};
createData(10, 3, 320);
