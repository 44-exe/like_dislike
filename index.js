const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");


const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: true })); 

var counter = 0;

app.get('/', (req, res) => {
    // at path '/' load file index.html
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/get_counter', (req, res) => {
    // at request 'get_counter' send counter as string
    console.log(`app.get: get_counter: ${counter}`);

    res.send(`${counter}`);
    // res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/count_up', (req, res) => {
    // at request 'count_up' add to counter and send counter as string
    counter += 1;
    console.log(`app.post: count_up: ${counter}`);

    res.send(`${counter}`);
    // res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/count_down', (req, res) => {
    // at request 'count_down' subtract from counter and send counter as string
    counter -= 1;
    console.log(`app.post: count_down: ${counter}`);

    res.send(`${counter}`);
    // res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});



// End of File
