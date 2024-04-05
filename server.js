
//Variable .env
require('dotenv').config({path: './.env'});

//Lägger till mysql och ansluter
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER_ACC,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

//Ger meddelande vid anslutning eller vid misslyckad.
connection.connect((err) => {
    if (err) {
        console.error("Connection failed big!: " + err);
       // throw err; Ger fel av Host-servern
    }

    console.log("Connected to MySQL!");
});

const express = require('express');
const cors = require('cors');
//Inställningar för express
const app = express();
const port = 3000;

//Lägger till view engine, inställningar för statiska filer samt hur bodyparser ska hantera data.
/*app.set("view engine", "ejs");
app.use(express.static("public")); */ //Statiska filer

app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to my REST API' });
});

app.get('/api/users', (req, res) => {
    res.json({ message: 'GET request to api/users' });
});

app.post('/api/users', (req, res) => {
    res.json({ message: 'POST request to api/users' });
});

app.put('/api/users/:id', (req, res) => {
    res.json({ message: 'PUT request to /users - with id: ' + req.params.id });
});

app.delete('/api/users/:id', (req, res) => {
    res.json({ message: 'DELETE request to /users - with id: ' + req.params.id });
});

//Startar servern
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});