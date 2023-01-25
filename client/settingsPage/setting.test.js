/**
 * @jest-environment jsdom
 */

 const fetchMock = require("jest-fetch-mock");
 const fs = require('fs');
 const path = require('path');
 
let {
    handleSubmit,
} = require('./settings')

 fetchMock.enableMocks();
 
 describe("handleSubmit", () => {
    it("exists",() => {
        expect(handleSubmit).toBeDefined();
    })
})
