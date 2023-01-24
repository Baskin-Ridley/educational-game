/**
 * @jest-environment jsdom
 */

 const fetchMock = require("jest-fetch-mock");
 const fs = require('fs');
 const path = require('path');
 
 fetchMock.enableMocks();
 
let {addQuestion, 
    checkAnswer, 
    displayScore, 
    displayQuestionNumber,
    navigateToResults,
    score,
    questionNumber} 
    = require('./question')

    const html = fs.readFileSync(path.resolve(__dirname, './questionPage.html'), 'utf8');


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
        document.documentElement.innerHTML = html.toString();
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
    it("displays the new question number when updated", () => {
        document.documentElement.innerHTML = html.toString();
        expect(document.getElementById('questionNumberDisplay').innerHTML).toBe('0')
        questionNumber++
        displayQuestionNumber()
        expect(document.getElementById('questionNumberDisplay').innerHTML).toBe('1')
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


