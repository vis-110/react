import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Button from '@mui/material/Button';
import * as yup from 'yup';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
const initialValues = {
    companyname: '',
    experience: '',
    qualification: '',
    jobtitle: '',
    description: ''
}

const validationSchema = yup.object().shape({
    companyname: yup
        .string()
        .required("Company Name is mandatory")
        .matches(/^[A-Za-z ]*$/, "Enter alphabets only")
        .min(3, "Mininum 3 character required")
        .max(26, "Enter upto 26 character only"),
    experience: yup
        .string()
        .required("Experience field mandatory")
        .matches(/^[A-Za-z ]*$/, "Enter alphabets only")
        .min(3, "Mininum 3 character required")
        .max(26, "Enter upto 26 character only"),
    qualification: yup
        .string()
        .required()
        .matches(/^[A-Za-z ]*$/, "Enter alphabets only"),
    jobtitle: yup
        .string()
        .required()
        .min(4, "Minimum 4 character required")
        .max(26, "Enter upto 15 character only"),
    description: yup
        .string()
        .required(),
});

export default function Register() {
    const navigate = useNavigate();
    const handleSubmitSubmit = async (values, { setSubmitting, resetForm }) => {
        console.log('Form values:', values);
        try {
          await axios.post('http://localhost:5000/recruiterperson', values);
          alert('Data submitted successfully');
          resetForm();
        } catch (error) {
          console.error('Error:', error);
        }
        navigate('/')
        setSubmitting(false);
      };
    return (
        <Box sx={{ width: '33%', margin: '100px auto', }}>
            <Paper elevation={4} >
                <Container>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '2rem', fontWeight: '500', padding: '30px 0px', color: 'gray' }}>Registration Form</Typography>
                    </Box>
                    <Box sx={{ margin: '0px 10px ' }}>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmitSubmit}>
                            {(props) => (
                                <Form sx={{ textalign: 'center' }}>
                                    <Grid item container rowSpacing={2}>
                                        

                                        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ margin: '10px 0px' }}  >
                                            <Field as={TextField} fullWidth helperText={<ErrorMessage name='companyname' />} name='companyname' label='Company Name'  >
                                            </Field>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ margin: '10px 0px' }}  >
                                            <Field as={TextField} fullWidth helperText={<ErrorMessage name='experience' />} name='experience' label='Experience'  >
                                            </Field>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ margin: '10px 0px' }}  >
                                            <Field as={TextField} fullWidth helperText={<ErrorMessage name='qualification' />} name='qualification' label=' Qualification'  >
                                            </Field>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ margin: '10px 0px' }}  >
                                            <Field as={TextField} fullWidth helperText={<ErrorMessage name='jobtitle' />} name='jobtitle' label=' Jobtitle'  >
                                            </Field>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ margin: '10px 0px' }}  >
                                            <Field as={TextField} fullWidth helperText={<ErrorMessage name='description' />} name='description' label=' Description'  >
                                            </Field>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
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
    )
}