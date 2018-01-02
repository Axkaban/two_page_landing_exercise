const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//setting up port
app.use(express.static('build'));
const PORT = process.env.PORT || 3000;

// setting up body parser for json objects
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connecting route.js for routes
app.use(require('./router'));

// Checking stablished connection
app.listen(PORT, () => {
    console.log(`${PORT} running`);
})