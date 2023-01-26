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
    = require('../client/assets/scripts/index');
// !! vv might need fixing
const html = fs.readFileSync(path.resolve(__dirname, '../client/index.html'), 'utf-8');
  
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
