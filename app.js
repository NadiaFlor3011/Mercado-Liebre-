const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static('public'));
app.listen(port, () => console.log('Server Up in http://localhost:' + port));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));