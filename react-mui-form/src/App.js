import * as React from "react";
import "./App.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Paper } from "@mui/material";
import { Form, Formik, Field, ErrorMessage } from "formik";
import *as yup from 'yup';
import { isDisabled } from "@testing-library/user-event/dist/utils";

const initialValues = {
  firstname:'',
  lastname:'',
  email:'',
  password:'',
  rpassword:'',
  checkout:false,
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
  rpassword: yup
    .string()
    .required("Retypepassword is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  checkout: yup
  .boolean()
  .oneOf([true],"Click On Terms & Condition")
});


function App() {
  const onSubmit =(value,props)=>{
    console.log(value);
    // console.log(props)
  }
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
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {(props) => (
                <Form>
                {/* {console.log(props)} */}
                  <Grid container sx={{ padding: "20px 0px" }}>
                    <Grid item lg={2} sx={{}}></Grid>
                    <Grid item lg={3.75} sx={{}}>
                      <Field as={TextField} label="First Name"
                      helperText={<ErrorMessage name="firstname"/>} name='firstname' sx={{ width: "100%" }} />
                    </Grid>
                    <Grid item lg={0.5} sx={{}}></Grid>
                    <Grid item lg={3.75} sx={{}}>
                      <Field as={TextField}
                        label="Last Name"
                        helperText={<ErrorMessage name="lastname"/>}
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
                        helperText={<ErrorMessage name="email"/>}
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
                        helperText={<ErrorMessage name="password"/>}
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
                        helperText={<ErrorMessage name="rpassword"/>}
                        label="Retype Password"
                        name='rpassword'
                      />
                    </Grid>
                    <Grid item lg={2} sx={{}}></Grid>
                  </Grid>

                  <Box sx={{}}>
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
                  </Box>

                  <Box sx={{ textAlign: "center" }}>
                    <Grid item lg={5}>
                      <Button
                      type="submit"
                        variant="contained"
                        
                        sx={{
                          margin: "10px 0px 40px 0px",
                          backgroundColor: "green",
                        }}
                        
                    
                      >
                        Register Now
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
        <p>new Form</p>
      </div>
    </>
  );
}

export default App;
