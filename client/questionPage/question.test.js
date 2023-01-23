/**
 * @jest-environment jsdom
 */

const {addQuestion, checkAnswer, displayScore} = require('./question')

describe("addQuestion", () => {

    it("exists",() => {
        expect(addQuestion).toBeDefined();
    })

})
