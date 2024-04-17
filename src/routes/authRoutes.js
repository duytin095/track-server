const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const route = express.Router();

route.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new User({ email, password });
        await user.save();
        res.send('you made a post requestTTT');
    } catch (error) {
    // Check if the error is a validation error
    if (error.name === 'ValidationError') {
        // Handle validation errors
        return res.status(422).send(error.message);
    } else {
        // Handle other types of errors
        return res.status(500).send(error.message);
    }
    }

});

module.exports = route;