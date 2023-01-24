const app = require("../server/app");
const request = require("supertest");
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
    });
    it("should return different questions when called multiple times", async () => {
        let response = await request(url).get("/questions/random");
        let randId = response.body["id"];
        let testFlag = false;
        for(let i=0; i<5; i++){
            response = await request(url).get("/questions/random");
            if (response.body["id"]!=randId){testFlag=true; break;}
        }
        expect(testFlag).toBe(true);
    });
});

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
    });
});

describe("POST /questions", () => {
    const newQuestion = {
        "id": 9,
        "question": "This is a test",
        "answers": [
            { "text": "Test?", "correct": true },
            { "text": "TEST!", "correct": false },
            { "text": "test", "correct": false },
            { "text": "t e s t", "correct": false },
        ],
        "category": "Test"
    }
    const newerQ = {
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
        await request(url).delete(`/questions/${9}`);
        await request(url).delete(`/questions/${10}`);
    });
    it("should add a question", async () => {
        const response = await request(url).post("/questions").send(newQuestion);
        const final = response.body[response.body.length - 1];
        expect(response.statusCode).toBe(201);
        expect(final.id).toBe(9);
        expect(final.category).toBe(newQuestion.category);
    });
    it("should create an unused id when not given one", async () => {
        const response = await request(url).post("/questions").send(newerQ);
        const final = response.body[response.body.length-1];
        expect(final.id).toBe(10);
    });
});

describe("DELETE /questions/:id", () =>{
    const newQuestion = {
        "id": 666,
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
        console.log("HERE");
        await request(url).post("/questions").send(newQuestion);
        console.log("here");
    });
    it("should delete one item", async()=> {
        const response = await request(url).delete("/questions/666");
        expect(response.statusCode).toBe(204);
        let questions = await request(url).get("/questions");
        questions = questions.body;
        const exists = questions.findIndex(q=>q.id==666);
        expect(exists).toBe(-1);
    });
});

describe("PATCH /questions/:id", () => {
    const newQuestion = {
        "id": 666,
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
        await request(url).post("/questions").send(newQuestion);
    });
    afterAll(async () => {
        await request(url).delete("/questions/666");
    });
    it("should update question if it exists", async () => {
        const response = await request(url).patch("/questions/666").send({
            "question": "This question has been patched",
            "category": "Still test but different"
        });
        expect(response.statusCode).toBe(200);
        expect(response.body.category).toBe("Still test but different");
    });
    it("should 404 if it doesn't exist", async () => {
        const response = await request(url).patch("/question/654").send({
            "category": "This won't work anyway"
        })
        expect(response.statusCode).toBe(404);
    })
});