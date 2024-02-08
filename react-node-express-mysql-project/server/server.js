const mysql = require("mysql2");
const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();
const bodyParser = require('body-parser');
    


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    return res.json("Get data successfully");
})

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Vishnu@sql",
	database: "person"
})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });

app.get('/persondetails',(req,res)=>{
    const sql ='SELECT * FROM persondetails';

    db.query(sql,(err,data)=>{
        if(err) return res.json(err,"Error is occured")
        return res.json(data)
    })
})

app.post('/persondetails',(req,res)=>{
  const sql = 'INSERT INTO persondetails (fname, lastname, email, password,repassword) VALUES (?, ?, ?, ?, ?)';
  const formData = req.body;
  const value = [
    formData.firstname,
    formData.lastname,
    formData.email,
    formData.password,
    formData.rpassword
  ]
  db.query(sql,value,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})




// router.post('/persondetails', (req, res) => {
//   console.log("successfully");
//     const { firstname, lastName, email, password,rpassword }  = req.body;
//     const sql = 'INSERT INTO persondetails (fname, lastname, email, password,repassword) VALUES (?, ?, ?, ?, ?)';
//     connection.query(sql, [firstname, lastName, email, password,rpassword], (err, result) => {
//       if (err) {
//         console.error('Error inserting data into MySQL:', err);
//         res.status(500).send('Error submitting data');
//         return;
//       }
//       console.log('Data inserted successfully:', result);
//       res.status(200).send('Data submitted successfully');
//     });
//   });
  
//   module.exports = router;

app.listen(5000, ()=>{
    console.log("listening");
})




