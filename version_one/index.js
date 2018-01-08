//setting up my needed constants
const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
//calling express
const app = express();
//getting my port to run
const PORT = process.env.PORT || 4000;

//setting up my connection to html
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

//my body-parser for json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//router connection
app.use(require('./router'));

//my connection to the browser
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
