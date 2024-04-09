
//Variable .env
require('dotenv').config({ path: './.env' });

//Lägger till mysql och ansluter
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER_ACC,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

//Ger meddelande vid anslutning eller vid misslyckad.
//function connectToMariaDB() {
connection.connect(err => {
    if (err) {
        console.error("Connection failed: " + err);
        return;
    }
    console.log("Connected to MySQL");
});
//}

const express = require('express');
const cors = require('cors');
//Inställningar för express
const app = express();
const port = process.env.PORT;

//connectToMariaDB();

//Lägger till view engine, inställningar för statiska filer samt hur bodyparser ska hantera data.
/*app.set("view engine", "ejs");
app.use(express.static("public")); */ //Statiska filer

app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to my CV api!' });
});

app.get('/api/cv', (req, res) => {
    //Anropar funktion för att ansluta till mariaDB/MySQL om ej ansluten för att lösa problem med sleep av host
  //  if (connection.state !== "connected") {
  //      connectToMariaDB();
  //  }
    connection.query("SELECT * FROM WORK_EXPERIENCE;", (err, rows) => {
        if (err) {
            res.json({ err });
        }
        res.json(rows);
    });
});


app.post('/api/add', (req, res) => {

    let companyName = req.body.companyName;
    let jobTitle = req.body.jobTitle;
    let location = req.body.location;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    let description = req.body.description;

    connection.query("INSERT INTO WORK_EXPERIENCE(COMPANY_NAME, JOB_TITLE, LOCATION, START_DATE, END_DATE, DESCRIPTION) VALUES(?,?,?,?,?,?)", [companyName, jobTitle, location, startDate, endDate, description], (err, result) => {
        if (err) {
            res.json({ err });
        }else{
            res.json("Lagring i databasen lyckades.");
        }
        console.table("Database inserts: " + result);
    });
}); 

app.delete('/api/delete/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);

    connection.query("DELETE FROM WORK_EXPERIENCE WHERE ID=?;", id, (err) => {
        if (err) {
            res.json({ err });
        }else{
            res.json("Inlägget är borttaget i databasen.");
        }
    });
});

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
