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


const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  retypepassword: ''
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
    .min(3, "Mininum 3 character required")
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
  retypepassword: yup
    .string()
    .required("Retypepassword is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),

});


function UserRegister() {
  const onsubmit = (value, props) => {
    console.log(value);
    alert(JSON.stringify(value))
  }
  return (

    <Box sx={{ width: '33%', margin: '100px auto', }}>
      <Paper elevation={4} >
        <Container>
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontSize: '2rem', fontWeight: '500', padding: '30px 0px', color: 'gray' }}>Registration Form</Typography>
          </Box>
          <Box sx={{ margin: '0px 10px ' }}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onsubmit}>
              {(props) => (
                <Form sx={{ textalign: 'center' }}>
                  <Grid container>
                    <Grid container sx={{ margin: '10px 0px' }} >
                      <Grid lg={5.5} md={5.5} sm={5.5} >
                        <Field as={TextField} fullWidth helperText={<ErrorMessage name='firstname' />} name='firstname' label='First Name' >
                        </Field>
                      </Grid>
                      <Grid lg={1} md={1} sm={1}>

                      </Grid>
                      <Grid lg={5.5} md={5.5} sm={5.5}>
                        <Field as={TextField} fullWidth helperText={<ErrorMessage name='lastname' />} name='lastname' label='Last Name'  >
                        </Field>
                      </Grid>
                    </Grid>

                    <Grid xs={12} sm={12} md={12} lg={12} sx={{margin:'10px 0px'}}  >
                      <Field as ={TextField} fullWidth helperText={<ErrorMessage name='email' />} name='email' label='Email'  >
                      </Field>
                    </Grid>

                    <Grid xs={12} sm={12} md={12} lg={12} sx={{margin:'10px 0px'}}  >
                      <Field as={TextField} fullWidth helperText={<ErrorMessage name='password' />} name='password' label='Password'  >
                      </Field>
                    </Grid>

                    <Grid xs={12} sm={12} md={12} lg={12} sx={{margin:'10px 0px'}}  >
                      <Field as={TextField} fullWidth helperText={<ErrorMessage name='retypepassword' />} name='retypepassword' label='Re-Type Password'  >
                      </Field>
                    </Grid>

                    <Grid xs={12} sm={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                      <Button variant='contained' type='submit' sx={{ width: '40%', margin: '10px 0px 30px 0px' }}>Submit</Button>
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
