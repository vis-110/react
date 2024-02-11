const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodeyParsar = require('body-parser');
const app = express();
app.use(cors())
app.use(bodeyParsar.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vishnu@sql',
    database: 'student'
});

app.get("/", (req, res) => {
    return res.json("Connection is verified in localhost")
});

db.connect((err) => {
    if (err) {
        console.error('mysql connection Error', err);
    }
    console.log('Mysql Connection is success');
});

// app.get('/ys',(req, res) => {
//     const sqldata = 'SELECT * FROM studentDetails';
//     db.query(sqldata,(err,data) => {
//         if (err) return res.json(err, "Table data show error");
//         return res.json(data, 'data is get successfully');
//     })

// });


app.get('/student',(req,res)=>{
    const sql ='SELECT * FROM studentDetails';

    db.query(sql,(err,data)=>{
        if(err) return res.json(err,"Error is occured")
        return res.json(data)
    })
});

app.post('/student',(req,res)=>{
    const sql = 'INSERT INTO studentDetails (fname,lastname,email,age,phonenumber,gender,country,address) VALUES(?,?,?,?,?,?,?,?)';
    const formData = req.body;
    values=[
        formData.firstname,
        formData.lastname,
        formData.email,
        formData.age,
        formData.phonenumber,
        formData.gender,
        formData.country,
        formData.address,
    ];
    db.query(sql,values,(err,data)=>{
        if(err) return res.json(err,"push data is error");
        return res.json(data, 'data added successfully')
        
    })
})

app.listen(5000, () => {
    console.log("localhost is listening for response");
})
