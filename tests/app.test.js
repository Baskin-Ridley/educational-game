const app = require("../server/app");
const request = require("supertest");
const { beforeAll } = require("jest-circus");
const url = "http://localhost:3000";

describe("GET /questions", () => {
    it("should return an object", async () => {
        const response = await request(url).get("/questions");
        expect(typeof response.body).toBe("object");
    });
    it("should return more than 1 question", async () => {
        const response = await request(url).get("/questions");
        expect(response.body.length > 1).toBe(true);
    });
    it("should filter by category", async () => {
        let response = await request(url).get("/questions?category=Science");
        expect(response.body[0]["category"]).toBe("Science");
        response = await request(url).get("/questions?category=English");
        expect(response.body[0]["category"]).toBe("English");
    });
});

describe("GET /questions/random", () => {
    it("should return an object", async () => {
        const response = await request(url).get("/questions/random");
        expect(typeof response).toBe("object");
    })
    it("should return different questions when called multiple times", async () => {
        let response = await request(url).get("/questions/random");
        let randId = response.body["id"];
        let testFlag = false;
        for(let i=0; i<5; i++){
            response = await request(url).get("/questions/random");
            if (response.body["id"]!=randId){testFlag=true; break;}
        }
        expect(testFlag).toBe(true);
    })
})

describe("GET /questions/:id", () => {
    it("should return an object", async () => {
        const response = await request(url).get("/questions/1");
        expect(typeof response.body).toBe("object");
    });
    it("should have the requested id", async () => {
        const response = await request(url).get("/questions/1");
        expect(response.body["id"]).toBe(1);
    });
    it("should 404 when given invalid param", async () => {
        const response = await request(url).get("/questions/0");
        expect(response.statusCode).toBe(404);
        const response2 = await request(url).get("/questions/test");
        expect(response2.statusCode).toBe(404);
    })
})

describe("POST /questions", () => {
    const newQuestion = {
        "question": "This is a test",
        "answers": [
            { "text": "Test?", "correct": true },
            { "text": "TEST!", "correct": false },
            { "text": "test", "correct": false },
            { "text": "t e s t", "correct": false },
        ],
        "category": "Test"
    }
    afterAll(async () => {
        const response = await request(url).get("/questions");
        await request(url).delete(`/questions/${response.body.length}`);
    })
    it("should add a question", async () => {
        const response = await request(url).post("/questions").send(newQuestion);
        const final = response.body[response.body.length - 1];
        expect(response.statusCode).toBe(201);
        expect(final.id).toBe(response.body.length);
        expect(final.category).toBe(newQuestion.category);
    });
});

describe("DELETE /questions/:id", () =>{
    const newQuestion = {
        "question": "This is a test",
        "answers": [
            { "text": "Test?", "correct": true },
            { "text": "TEST!", "correct": false },
            { "text": "test", "correct": false },
            { "text": "t e s t", "correct": false },
        ],
        "category": "Test"
    }
    beforeAll(async () => {
        await request(url).post("questions").send(newQuestion);
    })
    it("should delete one item", async()=> {
        const response = await request(url).delete()
    })
})