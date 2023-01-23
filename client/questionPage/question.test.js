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

describe("checkAnswer", () => {
    
        it("exists",() => {
            expect(checkAnswer).toBeDefined();
        })
    
    }
)

describe("displayScore", () => {

    const html = fs.readFileSync(path.resolve(__dirname, './questionPage.html'), 'utf8');

    it("exists",() => {
        expect(displayScore).toBeDefined();
    })

    it("displays the score", () => {
        document.documentElement.innerHTML = html.toString();
        displayScore()
        expect(document.getElementById('scoreDisplay').innerHTML).toBe('0')
    })

}
)

