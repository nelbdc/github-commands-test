const axios = require('axios');
const res = await axios("https://icanhazdadjoke.com/", { headers: { Accepts: 'text/plain' } });
console.log(res.data)