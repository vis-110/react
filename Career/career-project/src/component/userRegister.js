import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const initialValues = {
  fullname: '',
  email: '',
  password: '',
  mobilenumber: '',
  workstatus:'',
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const validationSchema = yup.object().shape({
  fullname: yup
    .string()
    .required("First Name is mandatory")
    .matches(/^[A-Za-z ]*$/, "Enter alphabets only")
    .min(3, "Mininum 3 character required")
    .max(26, "Enter upto 26 character only"),
  email: yup
    .string()
    .required("Email is mandatory")
    .email("Please enter valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 character required")
    .max(16, "Enter upto 16 character only"),
  mobilenumber: yup
    .string()
    .matches(phoneRegExp,"Phone number is not valid")
    .required("Mobile Number is required")
});

function UserRegister() {
 const  navigate= useNavigate();
  const onsubmit = async(value, props) => {
    console.log(value);
    alert(JSON.stringify(value))
    await axios.post("http://localhost:5000/user_registration",value)
    navigate("/login");
  }

  return (

    <Box sx={{ width: '40%', margin: '100px auto', }}>
      <Paper elevation={4} >
        <Container>
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontSize: '2rem', fontWeight: '500', padding: '30px 0px', color: 'gray' }}>Find a job & Grow your career</Typography>
          </Box>
          <Box sx={{ margin: '0px 10px ' }}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onsubmit}>
              {(props) => (
                <Form sx={{ textalign: 'center' }}>
                  <Grid container rowSpacing={3}>

                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ margin: '10px 0px' }}  >
                      <Field as={TextField} fullWidth helperText={<ErrorMessage name='fullname' />} name='fullname' label='Fullname'  >
                      </Field>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ margin: '10px 0px' }}  >
                      <Field as={TextField} fullWidth helperText={<ErrorMessage name='email' />} name='email' label='Email ID'  >
                      </Field>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ margin: '10px 0px' }}  >
                      <Field as={TextField} fullWidth helperText={<ErrorMessage name='password' />} name='password' label='Password'  >
                      </Field>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ margin: '10px 0px' }}  >
                      <Field as={TextField} fullWidth helperText={<ErrorMessage name='mobilenumber' />} name='mobilenumber' label='Mobilenumber'  >
                      </Field>
                    </Grid>

              
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                      <Button variant='contained' type='submit'   sx={{ width: '40%', margin: '10px 0px 30px 0px' }}>Register Now</Button>
                    </Grid>

                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}

export default UserRegister;
