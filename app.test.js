const { fetch } = require("./app");

test("adds 1 + 2 to equal 3", async () => {
    expect(typeof await fetch()["id"]).toBe(String);
});