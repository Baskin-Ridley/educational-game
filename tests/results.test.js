/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');


const html = fs.readFileSync(path.resolve(__dirname, './results.html'), 'utf8').toString(); 

// Fill the fake document with the right HTML
document.documentElement.innerHTML = html


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
