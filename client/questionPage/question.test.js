/**
 * @jest-environment jsdom
 */

 const fetchMock = require("jest-fetch-mock");
 const fs = require('fs');
 const path = require('path');
 
 fetchMock.enableMocks();

const {addQuestion, checkAnswer, displayScore} = require('./question')

describe("addQuestion", () => {

    it("exists",() => {
        expect(addQuestion).toBeDefined();
    })

})
/*
test('addQuestion', () => {
    expect(addQuestion).toBeDefined();
});

describe("checkAnswer", () => {
    
        it("exists",() => {
            expect(checkAnswer).toBeDefined();
        })
    
    }
)

describe("displayScore", () => {

    it("exists",() => {
        expect(displayScore).toBeDefined();
    })

}
)
*/
