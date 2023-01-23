/**
 * @jest-environment jsdom
 */

 const fetchMock = require("jest-fetch-mock");
 const fs = require('fs');
 const path = require('path');
 
 fetchMock.enableMocks();

let {addQuestion, checkAnswer, displayScore, score} = require('./question')

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
    it("displays the new score when updated", () => {
        document.documentElement.innerHTML = html.toString();
        expect(document.getElementById('scoreDisplay').innerHTML).toBe('0')
        score++
        displayScore()
        expect(document.getElementById('scoreDisplay').innerHTML).toBe('1')
    })
}
)

