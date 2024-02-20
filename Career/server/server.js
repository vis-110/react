const mysql = require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})) 

app.get('/', (req, res) => {
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

app.get('/recruiterperson', (req, res) => {
  const sql = 'SELECT * FROM recruiterperson';

  db.query(sql, (err, data) => {
    if (err) return res.json(err, "Error is occured")
    return res.json(data)
  })
})

app.get('/user_registration', (req, res) => {

  const sql = 'SELECT * FROM user_registration';

  db.query(sql, (err, data) => {
    if (err) return res.json(err, "Error is occured")
    return res.json(data)
  })
})


app.get('/user_logintable', (req, res) => {

  const sql = 'SELECT * FROM user_logintable';

  db.query(sql, (err, data) => {
    if (err) return res.json(err, "Error is occured")
    return res.json(data)
  })
})

app.get('/applylists', (req, res) => {

  const sql = 'SELECT * FROM applylists';

  db.query(sql, (err, data) => {
    if (err) return res.json(err, "Error is occured")
    return res.json(data)
  })
})

app.get(`/route`, (req, res) => {
    // const email = req.params.loginemail;
    const loginemail = req.query.personlogin;
  const myjobsQuery = 'select * from recruiter.applylists where emailid = ?';

  db.query(myjobsQuery,[loginemail] ,(err, data) => {
    if (err) {
      console.error('Error fetching users data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(data);
    
  })
})


app.post('/recruiterperson', (req, res) => {
  const sql = 'INSERT INTO recruiterperson (companyname, experience, qualificaton, jobtitle,jobdescription) VALUES (?, ?, ?, ?, ?)';
  const formData = req.body;
  const value = [
    formData.companyname,
    formData.experience,
    formData.qualification,
    formData.jobtitle,
    formData.description,
  ]
  db.query(sql, value, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.post('/user_registration', (req, res) => {
  const sql = 'INSERT INTO user_registration (fullname, email, psw, mobile_number,workstatus) VALUES (?, ?, ?, ?, ?)';
  const formData = req.body;
  const value = [
    formData.fullname,
    formData.email,
    formData.password,
    formData.mobilenumber,
    formData.workstatus,
  ]
  db.query(sql, value, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.post('/test', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM user_registration WHERE email = ? AND psw = ?', [email, password], (error, results) => {
    if (error) {
      res.status(500).send('Error fetching user');
      console.log("error");
    } else {
      if (results.length > 0) {
        res.send("success");
        console.log("yes");

      } else {
        res.send("faild");
        console.log("noo");
      }
    }
  });
});

app.post('/applylists', (req, res) => {
  const sql = 'INSERT INTO applylists (company_name, experience, qualification, job_title, job_description, emailid) VALUES ( ?, ?, ?, ?, ?, ?)';
  const formData = req.body;
  const values = [
    formData.companyname,
    formData.experience,
    formData.qualificaton,
    formData.jobtitle,
    formData.jobdescription,
    formData.email
  ]


  db.query(sql, values, (err, data) => {
    if (err) return res.json(err)
    return res.json(data);
  })
})


// const bcrypt = require('bcrypt');

// const plainTextPassword = 'password123';

// bcrypt.hash(plainTextPassword, 10, (err, hash) => {
//   if (err) {
//     console.error('Error hashing password:', err);
//   } else {
//     console.log('Hashed password:', hash);
    
//     // Store 'hash' in your database
//   }
// });

app.listen(5000, () => {
  console.log("listening");
})




