const express = require('express'),
    bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken'),
    config = require('./configs/config'),
    app = express(),
    port = process.env.PORT || 5000;


app.set('pass', config.pass);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(port, () => console.log(`Listening on port ${port}'`));

app.get('/', (req, res) => {
    res.send('Welcome!');
});