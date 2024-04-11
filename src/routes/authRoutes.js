const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const route = express.Router();

route.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('you made a post requestTTT');
});
module.exports = route;