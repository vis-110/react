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


function App() {
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
            <Grid container sx={{ padding: "20px 0px" }}>
              <Grid item lg={2} sx={{}}></Grid>
              <Grid item lg={3.5} sx={{}}>
                <TextField label="First Name" sx={{ width: "100%" }} />
              </Grid>
              <Grid item lg={1} sx={{}}></Grid>
              <Grid item lg={3.5} sx={{}}>
                <TextField
                  label="Last Name"
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
                <TextField
                  sx={{ margin: "0 auto", width: "100%" }}
                  label="Email"
                />
              </Grid>
              <Grid item lg={2} sx={{}}></Grid>
            </Grid>

            <Grid container sx={{ padding: "20px 0px" }} spacing={2}>
              <Grid item lg={2} sx={{}}></Grid>
              <Grid item lg={8}>
                <TextField
                  sx={{ margin: "0 auto", width: "100%" }}
                  label="Password"
                />
              </Grid>
              <Grid item lg={2} sx={{}}></Grid>
            </Grid>

            <Grid container sx={{ padding: "20px 0px" }} spacing={2}>
              <Grid item lg={2} sx={{}}></Grid>
              <Grid item lg={8}>
                <TextField
                  sx={{ margin: "0 auto", width: "100%" }}
                  label="Confirm Password"
                />
              </Grid>
              <Grid item lg={2} sx={{}}></Grid>
            </Grid>

            <Box sx={{}}>
              <Grid item lg={2} sx={{}}>
                <FormGroup sx={{}}>
                  <FormControlLabel

                    control={<Checkbox />}
                    label="I accept the Terms of Use & Privacy Policy"
                    sx={{margin:'0 auto'}}
                  />
                </FormGroup>
              </Grid>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Grid item lg={5}>
                <Button
                  variant="contained"
                  sx={{ margin: "10px 0px 40px 0px", backgroundColor: "green" }}
                >
                  Register Now
                </Button>
              </Grid>
            </Box>
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
