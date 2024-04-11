const express = require('express');

const route = express.Router();

route.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('you made a post requestTTT');
});
module.exports = route;