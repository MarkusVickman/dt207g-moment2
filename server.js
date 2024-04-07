
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
const port = process.env.PORT;

//Lägger till view engine, inställningar för statiska filer samt hur bodyparser ska hantera data.
/*app.set("view engine", "ejs");
app.use(express.static("public")); */ //Statiska filer

app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
        res.json({ message: 'Welcome to my CV api!' });   
});

app.get('/api/cv', (req, res) => {
    connection.query("SELECT * FROM WORK_EXPERIENCE;", (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        res.json({ CV: rows });
    });    
        // Here is the change:
        connection.release();
});

/*
app.post('/api/cv', (req, res) => {
    connection.query("SELECT * FROM WORK_EXPERIENCE;", (err, rows) => {
        if (err) {
            res.json({err});
        }
        res.json({ CV: rows });
    });  
});*/

/*
app.put('/api/cv/:id', (req, res) => {
    res.json({ message: 'PUT request to /cv - with id: ' + req.params.id });
});
*/
/*
app.delete('/api/cv/:id', (req, res) => {
    res.json({ message: 'DELETE request to /cv - with id: ' + req.params.id });
});*/

//Startar servern
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});