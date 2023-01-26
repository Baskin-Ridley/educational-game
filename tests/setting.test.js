/**
 * @jest-environment jsdom
 */

 const fetchMock = require("jest-fetch-mock");
 const fs = require('fs');
 const path = require('path');
 
 const html = fs.readFileSync(path.resolve(__dirname, '../client/settings.html'), 'utf8');

let {
    handleSubmit,
    navigateToAddQuestions
} = require('../client/assets/scripts/settings')

 fetchMock.enableMocks();
 
 describe("handleSubmit", () => {
    it("exists",() => {
        expect(handleSubmit).toBeDefined();
    })
})

describe("navigateToAddQuestions", () => {
    it("exists",() => {
        expect(navigateToAddQuestions).toBeDefined();
    })
})

//write a test to check if there is a form on the page
//write a test to check if the form has a submit button

describe("Does the page", () => {
    it("have a form", () => {
        document.documentElement.innerHTML = html.toString();
        expect(document.getElementById('form')).toBeDefined();
    })
    it("have a submit button", () => {
        document.documentElement.innerHTML = html.toString();
        expect(document.getElementById('submit')).toBeDefined();
    }
    )
})
