import request from "supertest";
import api from "../../api.js";
import db from "../../config/databaseTest.js";

const agent = request.agent(api);

beforeAll(async () => {
    await db.connect();
});

afterEach(async () => {
    await db.clear();
});

afterAll(async () => {
    await db.close();
});

describe("Client Controller", () => {
    test("Delete Client", async () => {
        // first create a client
        const newClient = await agent.post("/register").send({
            name: "Cliente Test",
            date_birth: "2020-01-01",
            address: "Calle falsa 123",
            phone: "123456789",
            references: [
                {
                    name: "Referencia Test",
                    phone: "123456789",
                },
            ],
            email: "email@test.com",
        });

        const { data } = newClient.body;
        const { _id } = data;

        // then we delete it
        const deleteClient = await agent.del(`/clients/${_id}`);
        expect(deleteClient.status).toBe(201);
    });
});
