async function fetch() {
    const axios = require('axios');
    const res = await axios("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } });
    return res.data;
}


export {
    fetch
}