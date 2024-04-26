const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

const route = express.Router();

route.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new User({ email, password });
        await user.save();
        const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
        console.log('token'+token);
        res.send({token: token});
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

route.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(422).send({error : 'Musr provide email and password'});
    }

    const user = await User.findOne({email});
    if(!user){
        return res.status(404).send({error: 'Email not found'});
    }
    try {
        await user.comparePassword(password);
        const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
        res.send({token});
    } catch (error) {
        return res.status(422).send({error: 'Invalid email or password'});
    }
})

module.exports = route;