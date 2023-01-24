/**
 * @jest-environment node 
 */

const {gameOne, userRecord, leaderBoard} = require('./index');
  
describe("gameOne", () => {
    expect(gameOne).toBeDefined();
})

test('ue jsdom and set URl in this test file', () => {
    expect(window.location.href).toBe('test-page.html');
})
 


/*
test('button game-one redirects to test-page.html', () => {
    // We use jest.spyOn to spy on the window.location.href
    const spy = jest.spyOn(window.location, 'href', 'set');
    // We use a simulate click on the button
    document.getElementById("button").click();
    // check if the href is set to 'test-page.html'
    expect(spy).toHaveBeenLastCalledWith('test-page.html');
    // after the test is done, restore the original implementation
    spy.mockRestore();
});
*/
