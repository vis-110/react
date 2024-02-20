import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import *as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const initialKeyValue = {
    email: '',
    password: '',
};

const validation = yup.object().shape({
    email: yup.string().email("Enter valid email").required(),
    password: yup.string().min(6, 'Password must be at least 8 characters.').required(),

});
export default function Login() {
    const [loginemail, setlogin] = useState('')
    const navigate = useNavigate();
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        const { email } = values;
        setlogin(email);
        await axios.post("http://localhost:5000/test", values)
            .then((res) => {
                if (res.data === "success") {
                    navigate(`/companylist/${email}`)
                }
                else {
                    alert('Incorrected email and password')
                }
            })
            .catch(err => console.log(err))
        resetForm();
        setSubmitting(false);
    }

    return (
        <Box sx={{ width: '30%', margin: '100px auto' }}>
            <Paper elevation={3} >
                <Container maxWidth="lg">

                    <Box sx={{ textAlign: 'center', padding: '25px 0px' }}>
                        <Typography variant='h5'>Login</Typography>
                    </Box>

                    <Box >
                        <Formik initialValues={initialKeyValue} validationSchema={validation} onSubmit={handleSubmit}>
                            {(props) => (
                                <Form>
                                    <Grid container rowSpacing={3} >

                                        <Grid item lg={12} md={12} sm={12} xs={12}>
                                            <Field as={TextField} fullWidth label='Email' name='email'
                                                helperText={<ErrorMessage name='email' />} />
                                        </Grid>

                                        <Grid item lg={12} md={12} sm={12} xs={12}>
                                            <Field as={TextField} fullWidth label='Password' name='password'
                                                helperText={<ErrorMessage name='password' />} />
                                            <Typography variant='p' sx={{ color: 'blue' }}>Forget Password?</Typography>
                                        </Grid>


                                        <Grid  sx={{ textAlign: 'center', marginBottom: '25px' }} item lg={12} md={12} sm={12} xs={12}>
                                            <Button type="submit" fullWidth
                                                variant="contained">Login</Button>
                                        </Grid>

                                        <Grid  sx={{ textAlign: 'center', marginBottom: '25px' }} item lg={12} md={12} sm={12} xs={12}>
                                            <Typography variant='p'>Not a member?<Typography variant='p' sx={{ color: 'blue', marginLeft: '5px' }}><Link to={'/userregister'}>SignUp</Link></Typography> </Typography>
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