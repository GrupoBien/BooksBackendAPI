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
    test("Delete Client --> id error", async () => {
        const response = agent.del("/clients/62a93bd339362736992ad953");
        const urlExists = response.url.includes(
            "/clients/62a93bd339362736992ad953"
        );

        expect(response.method).toBe("DELETE");
        expect(urlExists).toBeTruthy();
    });
});
