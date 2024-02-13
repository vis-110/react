import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import imageOne from "../images/Capture.JPG"
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    function loginSubmit() {
        navigate('/login')
    }

    function registerSubmit() {
        navigate('/register')
    }

    return (
        <>
            <Box sx={{ margin: '100px 0px' }}>
                <Grid container lg={12} md={12} sm={12} xs={12}>
                    <Grid lg={6.5} md={6.5} sm={6.5} xs={6.5}>
                        <img src={imageOne} style={{ width: '100%' }} />
                    </Grid>
                    <Grid lg={5.5} md={5.5} sm={5.5} xs={5.5} fullWidth sx={{ textAlign: 'center' }}>
                        <Box sx={{ margin: '140px 50px' }} >
                            <Container>
                                <Box sx={{ textAlign: 'centert', marginBottom: '20px' }} >
                                    <Typography variant="h5" sx={{ color: 'lightcoral' }}>Get Starting</Typography>
                                </Box>
                                <Grid container lg={12} md={12} sm={12} xs={12}>
                                    <Grid lg={1} md={1} sm={1} xs={1}></Grid>
                                    <Grid lg={4.5} md={4.5} sm={4.5} xs={4.5}>
                                        <Button onClick={loginSubmit} fullWidth variant="contained">Login</Button>
                                    </Grid>
                                    <Grid lg={1} md={1} sm={1} xs={1}></Grid>
                                    <Grid lg={4.5} md={4.5} sm={4.5} xs={4.5}>
                                        <Button fullWidth variant="contained" onClick={registerSubmit}>Register</Button>
                                    </Grid>
                                    <Grid lg={1} md={1} sm={1} xs={1}></Grid>
                                </Grid>

                            </Container>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}