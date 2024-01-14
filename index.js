const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const users = {}; // Simulated user database

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!users[username]) {
        users[username] = password;
        res.send('Registration successful!');
    } else {
        res.send('Username already exists. Try another one.');
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
        res.send('Login successful!');
    } else {
        res.send('Invalid username or password.');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
