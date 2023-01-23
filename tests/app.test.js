const app = require("../server/app");
const request = require("supertest");
const { describe } = require("yargs");
const url = "http://localhost:3000";

describe("GET /questions", () => {
    it("should return an object", async () => {
        const response = await request(url).get("/questions");
        expect(typeof response.body).toBe("object");
    });
    it("should return more than 1 question", async () => {
        const response = await request(url).get("/questions");
        expect(response.body.length >1).toBe(true);
    });
    it("should filter by category", async () => {
        let response = await request(url).get("/questions?category=Science");
        expect(response.body[0]["category"]).toBe("Science");
        response = await request(url).get("/questions?category=English");
        expect(response.body[0]["category"]).toBe("English");
    })
});

// describe("POST")