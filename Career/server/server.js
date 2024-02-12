const mysql = require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors');
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
	database: "recruiter"
})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });

app.get('/recruiterperson',(req,res)=>{
    const sql ='SELECT * FROM recruiterperson';

    db.query(sql,(err,data)=>{
        if(err) return res.json(err,"Error is occured")
        return res.json(data)
    })
})

app.post('/recruiterperson',(req,res)=>{
  const sql = 'INSERT INTO recruiterperson (companyname, experience, qualificaton, jobtitle,jobdescription) VALUES (?, ?, ?, ?, ?)';
  const formData = req.body;
  const value = [
    formData.companyname,
    formData.experience,
    formData.qualification,
    formData.jobtitle,
    formData.description,
  ]
  db.query(sql,value,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})


app.listen(5000, ()=>{
    console.log("listening");
})




