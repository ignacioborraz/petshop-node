import app from "../../app.js";
import { expect } from "chai";
import request from "supertest";
import { faker } from "@faker-js/faker";

describe("pets tests", () => {
	describe("on success", () => {
		// let token = 'asasajskajsak.234dcscx.sdvsdvc'; 401 en caso de usar passport+jwt
		it("[GET - /api/pets] should return paginated array of pets", async () => {
			const response = await request(app).get("/api/pets")
			expect(response.statusCode).to.equal(200);
			expect(response.headers).to.have.property("x-next")
		});
		it("[POST - /api/pets] should create a pet", async () => {
			const data = {
				name: faker.person.firstName(),
				tag: faker.animal.type()
			};
			const response = await request(app).post("/api/pets").send(data);
			expect(response.statusCode).to.equal(201);
		});
		it("[GET - /api/pets/:petId] should return the first pet", async () => {
			const response = await request(app).get("/api/pets/1")
			expect(response.statusCode).to.equal(200);
		});
	});
	describe("on failure", () => {
		it("[GET - /api/pets] should return a non-existent page message", async () => {
			const response = await request(app).get("/api/pets?page=1000")
			expect(response.statusCode).to.equal(404);
			expect(response.body.message).to.equal("not found");
		});
		it("[POST - /api/pets] should not create a pet", async () => {
			const data = {
				name: null,
				tag: null
			};
			const response = await request(app).post("/api/pets").send(data);
			expect(response.statusCode).to.equal(400);
		});
		it("[GET - /api/pets/:petId] should not return a pet", async () => {
			const response = await request(app).get("/api/pets/1000")
			expect(response.statusCode).to.equal(404);
		});
	});
});