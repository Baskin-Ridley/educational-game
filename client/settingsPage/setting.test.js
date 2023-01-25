/**
 * @jest-environment jsdom
 */

 const fetchMock = require("jest-fetch-mock");
 const fs = require('fs');
 const path = require('path');
 
 const html = fs.readFileSync(path.resolve(__dirname, './settings.html'), 'utf8');

let {
    handleSubmit,
} = require('./settings')

 fetchMock.enableMocks();
 
 describe("handleSubmit", () => {
    it("exists",() => {
        document = html.toString();
        expect(handleSubmit).toBeDefined();
    })
})
