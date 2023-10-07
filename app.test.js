const fetch = require("./app");

test("is string", async () => {
    const string = await fetch();
    expect(typeof string["id"]).toBe(typeof "");
});