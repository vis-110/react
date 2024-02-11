import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import *as yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from "formik";
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';


const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  rpassword: '',
  // checkout:false,
}

const validationSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("First Name is mandatory")
    .matches(/^[A-Za-z ]*$/, "Enter alphabets only")
    .min(3, "Mininum 3 character required")
    .max(26, "Enter upto 26 character only"),
  lastname: yup
    .string()
    .required("Last Name is mandatory")
    .matches(/^[A-Za-z ]*$/, "Enter alphabets only")
    .min(2, "Mininum 3 character required")
    .max(26, "Enter upto 26 character only"),
  email: yup
    .string()
    .required("Email is mandatory")
    .email("Please enter valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Minimum 4 character required")
    .max(16, "Enter upto 15 character only"),
  rpassword: yup
    .string()
    .required("Retypepassword is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  // checkout: yup
  // .boolean()
  // .oneOf([true],"Click On Terms & Condition")
});


function App() {
  const [usedata, setData] = useState([]);

  useEffect(() => {
    const gettodata = async () => {
      const responce = await fetch('http://localhost:5000/persondetails');
      const data = await responce.json();
      setData(data);
    };
    gettodata();
  })

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log('Form values:', values);
    console.log('formValue:' ,usedata);
    try {
      await axios.post('http://localhost:5000/persondetails', values);
      alert('Data submitted successfully');
      resetForm();
    } catch (error) {
      console.error('Error:', error);
    }
    setSubmitting(false);
  };

  // useEffect(()=>{
  //   fetch('http://localhost:5000/persondetails')
  //   .then(res=> console.log(res.json()))
  //   .then(data=> setData(data))
  //   .catch(err => console.log(err))
  // })



  return (
    <>
      <Box sx={{ width: "45%", margin: "50px auto" }}>
        <Container maxWidth="lg">
          <Card variant="outlined" sx={{}}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h5"
                sx={{ margin: "30px 0px 20px 0px", color: "gray" }}
                component="h6"
              >
                Registration Form
              </Typography>
            </Box>
            <Formik initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}>
              {(props) => (
                <Form>
                  {/* {console.log(props)} */}
                  <Grid container sx={{ padding: "20px 0px" }}>
                    <Grid item lg={2} sx={{}}></Grid>
                    <Grid item lg={3.75} sx={{}}>
                      <Field as={TextField} label="First Name"
                        helperText={<ErrorMessage name="firstname" />} name='firstname' sx={{ width: "100%" }} />
                    </Grid>
                    <Grid item lg={0.5} sx={{}}></Grid>
                    <Grid item lg={3.75} sx={{}}>
                      <Field as={TextField}
                        label="Last Name"
                        helperText={<ErrorMessage name="lastname" />}
                        name='lastname'
                        sx={{
                          margin: "0 auto",
                          width: "100%",
                          display: "inline-block",
                        }}
                      />
                    </Grid>
                    <Grid item lg={2} sx={{}}></Grid>
                  </Grid>

                  <Grid container sx={{ padding: "20px 0px" }} spacing={2}>
                    <Grid item lg={2} sx={{}}></Grid>
                    <Grid item lg={8}>
                      <Field as={TextField}
                        sx={{ margin: "0 auto", width: "100%" }}
                        helperText={<ErrorMessage name="email" />}
                        label="Email"
                        name='email'
                      />
                    </Grid>
                    <Grid item lg={2} sx={{}}></Grid>
                  </Grid>

                  <Grid container sx={{ padding: "20px 0px" }} spacing={2}>
                    <Grid item lg={2} sx={{}}></Grid>
                    <Grid item lg={8}>
                      <Field as={TextField}
                        sx={{ margin: "0 auto", width: "100%" }}
                        helperText={<ErrorMessage name="password" />}
                        label="Password"
                        name='password'
                      />
                    </Grid>
                    <Grid item lg={2} sx={{}}></Grid>
                  </Grid>

                  <Grid container sx={{ padding: "20px 0px" }} spacing={2}>
                    <Grid item lg={2} sx={{}}></Grid>
                    <Grid item lg={8}>
                      <Field as={TextField}
                        sx={{ margin: "0 auto", width: "100%" }}
                        helperText={<ErrorMessage name="rpassword" />}
                        label="Retype Password"
                        name='rpassword'
                      />
                    </Grid>
                    <Grid item lg={2} sx={{}}></Grid>
                  </Grid>

                  {/* <Box sx={{}}>
                    <Grid item lg={2} sx={{}}>
                      <FormGroup sx={{}}>
                        <Field as={FormControlLabel}
                        name="checkout"
                          control={<Checkbox 
                          />}
                          
                          label="I accept the Terms of Use & Privacy Policy"
                          sx={{ margin: "0 auto" }}
                        />
                      </FormGroup>
                    </Grid>
                  </Box> */}

                  <Box sx={{ textAlign: "center" }}>
                    <Grid item lg={5}>
                      <Button
                        type="submit"
                        variant="contained"

                        sx={{
                          margin: "10px 0px 40px 0px",
                        }}


                      >
                        Submit
                      </Button>
                    </Grid>
                  </Box>
                </Form>
              )}
            </Formik>
          </Card>
        </Container>
      </Box>

      <div>
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Password</th>
              <th>Retype Password</th>
            </tr>
          </thead>
          <tbody>
            {usedata.map((d, i) => (
              <tr key={i}>
                <td>{d.fname}</td>
                <td>{d.lastname}</td>
                <td>{d.email}</td>
                <td>{d.password}</td>
                <td>{d.repassword}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  );
}

export default App;
