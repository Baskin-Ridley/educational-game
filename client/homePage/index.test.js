/**
 * @jest-environment node 
 */
const fetchMock = require("jest-fetch-mock");    
const fs = require('fs');    
const path = require('path');        

fetchMock.enableMocks();

const {gameOne,
    userRecord, 
    leaderBoard,
    heading} 
    = require('./index');
// !! vv might need fixing
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');
  
/*
test('use jsdom and set URl in this test file', () => {
    expect(window.location.href).toBe('test-page.html');
})
*/
describe("gameOne", () => {
    it("exists", () => {
        expect(gameOne).toBeDefined();
    })
})

describe("userRecord", () => {
    it("exists", () => {
        expect(userRecord).toBeDefined();
    })
})

describe("leaderBoard", () => {
    it("exists", () => {
        expect(leaderBoard).toBeDefined();
    })
})

describe("heading", () => {
    it("exists", () => {
        expect(heading).toBeDefined();
    })
})

/*
describe("heading", () => {
    it("exists", () => {
        expect(heading).toHaveTextContent('Brain Playground');
    })
})
*/
