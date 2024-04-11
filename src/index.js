const express = require('express');
const mongoose = require('mongoose');

const app = express();
const mongoUri = 'mongodb+srv://duytin095:tinyi2204@track-server.gdafiev.mongodb.net/';

mongoose.connect(mongoUri);
mongoose.connection.on('connected', () =>{
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) =>{
    console.log('Error connecting to mongo', err);
})
app.get('/', (req, res) =>{
    res.send('Hi there!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})