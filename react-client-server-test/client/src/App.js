import Paper from '@mui/material/Paper';
import './App.css';
import *as yup from 'yup';
import Box from '@mui/material/Box';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { TextareaAutosize } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const initialKeyValue = {
  firstname: '',
  lastname: '',
  email: '',
  age: '',
  phonenumber: '',
  gender: '',
  country: '',
  address: '',
};

const validation = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email("Enter valid email").required(),
  age: yup.string().required(),
  phonenumber: yup.string().required(),
  address: yup.string().required(),

});


function App() {

  const [fullData, setData] = useState([])

  useEffect(() => {
    const data = async () => {
      const getValue = await fetch('http://localhost:5000/student');
      const getValueData = await getValue.json();
      setData(getValueData);
    }
    data();
  }, []);
  console.log(fullData);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // console.log('Form values:', values);
    try {
      await axios.post('http://localhost:5000/student', values);
      // console.log('Form values:', values);
      resetForm();
    } catch (error) {
      console.error('Error:', error);
    }
    setSubmitting(false);
  };
  return (
    <>
      <Box sx={{ width: '30%', margin: '100px auto' }}>
        <Paper elevation={3} >
          <Container maxWidth="lg">

            <Box sx={{ textAlign: 'center', padding: '25px 0px' }}>
              <Typography variant='h5'>Registration Form</Typography>
            </Box>

            <Box >
              <Formik initialValues={initialKeyValue} validationSchema={validation} onSubmit={handleSubmit}>
                {(props) => (
                  <Form>
                    <Grid container rowSpacing={3} >
                      <Grid item lg={5.5} md={5.5} sm={5.5} xs={5.5}>
                        <Field as={TextField} label='First Name' name='firstname'
                          helperText={<ErrorMessage name='firstname' />} />
                      </Grid>
                      <Grid item lg={1} md={1} sm={1} xs={1}>
                      </Grid>
                      <Grid item lg={5.5} md={5.5} sm={5.5} xs={5.5}>
                        <Field as={TextField} label='Last Name' name='lastname'
                          helperText={<ErrorMessage name='lastname' />} />
                      </Grid>

                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Field as={TextField} fullWidth label='Email' name='email'
                          helperText={<ErrorMessage name='email' />} />
                      </Grid>

                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Field as={TextField} fullWidth label='Age' name='age'
                          helperText={<ErrorMessage name='age' />} />
                      </Grid>

                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Field as={TextField} fullWidth label='Phone Number' name='phonenumber'
                          helperText={<ErrorMessage name='phonenumber' />} />
                      </Grid>

                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Field as={TextField} fullWidth
                          label="Address"
                          multiline
                          rows={4}
                          name='address'
                          helperText={<ErrorMessage name='address' />}
                        />
                      </Grid>

                      <Grid sx={{ textAlign: 'center', marginBottom: '25px' }} item lg={12} md={12} sm={12} xs={12}>
                        <Button type="submit"
                          variant="contained">Submit</Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Box>

          </Container>
        </Paper>
      </Box>

      <Box>
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Age</th>
              <th>phonenumber</th>
              <th>Gender</th>
              <th>Country</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {fullData.map((d, i) => (
              <tr key={i}>
                <td>{d.fname}</td>
                <td>{d.lastname}</td>
                <td>{d.email}</td>
                <td>{d.age}</td>
                <td>{d.phonenumber}</td>
                <td>{d.gender}</td>
                <td>{d.country}</td>
                <td>{d.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </>
  );
}
export default App;