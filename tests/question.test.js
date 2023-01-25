/**
 * @jest-environment jsdom
 */

 const fetchMock = require("jest-fetch-mock");
 const fs = require('fs');
 const path = require('path');
 
 fetchMock.enableMocks();
 
 const html = fs.readFileSync(path.resolve(__dirname, '../client/questionPage.html'), 'utf8');

let {addQuestion, 
    checkAnswer, 
    displayScore, 
    displayQuestionNumber,
    navigateToResults,
    score,
    questionNumber} 
    = require('../client/assets/scripts/question')


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

    it("exists",() => {
        expect(displayScore).toBeDefined();
    })

    it("displays the score", () => {
        document.documentElement.innerHTML = html.toString();
        displayScore()
        expect(document.getElementById('scoreDisplay').innerHTML).toBe('0')
    })
    it("displays the new score when updated", () => {
        document.Element.innerHTML = html.toString();
        expect(document.getElementById('scoreDisplay').innerHTML).toBe('0')
        score++
        displayScore()
        expect(document.getElementById('scoreDisplay').innerHTML).toBe('1')
    })
}
)

describe("displayQuestionNumber", () => {
    it("exists",() => {
        expect(displayQuestionNumber).toBeDefined();
    })
    it("displays the question number", () => {
        document.documentElement.innerHTML = html.toString();
        displayQuestionNumber()
        expect(document.getElementById('questionNumberDisplay').innerHTML).toBe('0')
    })
})

describe("navigateToResults", () => {
    it("exists",() => {
        expect(navigateToResults).toBeDefined();
    })
    it("navigates to the results page", () => {
        navigateToResults()
        //temp url
        expect(window.location.href).toBe("http://google.com/")
    })

    }
)


