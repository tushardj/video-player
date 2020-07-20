const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(path.join(__dirname, 'dist/Video-player')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/Video-player/index.html'));
});

app.listen(port, function() {
    console.log("Server runing on localhost:" + port);
})
