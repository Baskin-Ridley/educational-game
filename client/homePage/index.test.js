/**
 * @jest-environment node 
 */
const fetchMock = require("jest-fetch-mock");    
const fs = require('fs');    
const path = require('path');        

fetchMock.enableMocks();

const {gameOne, userRecord, leaderBoard} = require('./index');
  
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
