import { gameOne, userRecord, leaderBoard } from "./index";

test('button game-one redirects to test-page.html', () => {
    // use jest.spyOn to spy on the window.location.href
    const spy = jest.spyOn(window.location, 'href', 'set');
    // simulate click on button
    document.getElementById("game-one").click();
    // check if href is set to 'test-page.html'
    expect(spy).toHaveBeenLastCalledWith('test-page.html');
    // after test, restore original implementation
    spy.mockRestore();
});
