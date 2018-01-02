const express = require('express');
const app = express();

app.use(express.static('build'));
const PORT = process.env.PORT || 4000;

app.use(require('./router'));


app.listen(PORT, () => {
    console.log(`${PORT} running`);
})