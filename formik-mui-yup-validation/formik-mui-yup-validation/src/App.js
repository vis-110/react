import './App.css';
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
import { Typography } from '@mui/material';
import * as yup from 'yup';


const initialValues = {
  firstname:'',
  lastname:'',
  email:'',
  password:'',
  retypepassword:''
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


function App() {
  const onsubmit =(value,props)=>{
    console.log(value);
  }
  return (
    <>
      <Paper elevation={4} sx={{ width: '30%', margin: '100px auto',  }}>
        <Container>
          <Box sx={{textAlign:'center'}}>
            <Typography sx={{fontSize:'32px', fontWeight:'500',marginTop:'40px', color:'gray'}}>Registration Form</Typography>
          </Box>
          <Grid sx={{padding:'20px 40px'}} >
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onsubmit}>
              {(props) => (
                <Form sx={{ textalign: 'center' }}>
                  <Grid  spacing={2}>
                    <Grid lg={12}>

                      <Grid lg={4}>
                      <TextField  helperText={<ErrorMessage name='firstname'/>} name='firstname' label='First Name' >
                      </TextField>
                      </Grid>

                      <Grid lg={4}>
                      <TextField  helperText={<ErrorMessage name='lastname'/>}  name='lastname' label='Last Name'  >
                      </TextField>
                      </Grid>
                    </Grid>


                    <Grid lg={12}  >
                      <Field as={TextField} helperText={<ErrorMessage name='email'/>}  name='email' label='Email'  sx={{ margin: '20px 0px', width:'100%' }}  >
                      </Field>
                    </Grid>

                    <Grid sx={{ width: '100%' }} >
                      <Field as={TextField} helperText={<ErrorMessage name='password'/>}  name='password' label='Password' xs={12} sx={{ margin: '20px 0px', width: '100%' }}  >
                      </Field>
                    </Grid>

                    <Grid sx={{ width: '100%' }} >
                      <Field as={TextField} helperText={<ErrorMessage name='retypepassword'/>}  name='retypepassword' label='Re-Type Password' xs={12} sx={{ margin: '20px 0px', width: '100%' }}  >
                      </Field>
                    </Grid>
                    
                    <Grid sx={{textAlign:'center'}}>
                    <Button variant='contained' type='submit'  sx={{width:'40%',margin:'20px 0px' }}>Submit</Button>
                    </Grid>

                  </Grid>

                </Form>
              )}
            </Formik>

          </Grid>
        </Container>

      </Paper>
    </>

  );
}

export default App;
