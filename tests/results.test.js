const fetchMock = require("jest-fetch-mock");
const fs = require('fs');
const path = require('path');

fetchMock.enableMocks();

const { qPage, hPage, lPage, displayScore } = require("../client/assets/scripts/results");

describe("qPage", () => {
    it("exists", () => {
        expect(qPage).toBeDefined();
    })
})
describe("hPage", () => {
    it("exists", () => {
        expect(hPage).toBeDefined();
    })
})
describe("lPage", () => {
    it("exists", () => {
        expect(lPage).toBeDefined();
    })
})
describe("displayScore", () => {
    it("exists", () => {
        expect(displayScore).toBeDefined();
    })
})
