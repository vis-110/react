import TextField from '@mui/material/TextField';
import './App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Container  from '@mui/material/Container';
import Typography  from '@mui/material/Typography';
import { Button } from '@mui/material';
function App() {
  return (
    <Box sx={{ width: '100%', margin:'50px 0px' }}>
      <Box sx={{textAlign:'center'}}>
        <Typography variant='h5' sx={{margin:'50px 0px'}}>Material UI using responsive</Typography>
      </Box>
    <Container>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid  sm={12} md={6} lg={4} >
          <Paper elevation={3}>
            <TextField fullWidth variant='outlined' label='First Name'></TextField>
          </Paper>
        </Grid>
        <Grid  sm={12} md={6} lg={4} >
          <Paper elevation={3}>
            <TextField fullWidth variant='outlined' label='Last Name' ></TextField>
          </Paper>
        </Grid>
        <Grid sm={12} md={6} lg={4} >
          <Paper elevation={3}>
            <TextField fullWidth variant='outlined' label='Email'></TextField>
          </Paper>
        </Grid>
        <Grid  sm={12} md={6} lg={4}>
          <Paper elevation={3}>
            <TextField fullWidth variant='outlined' label='Age'></TextField>
          </Paper>
        </Grid>
        <Grid  sm={12} md={6} lg={4} >
          <Paper elevation={3}>
            <TextField fullWidth variant='outlined' label='Password'></TextField>
          </Paper>
        </Grid>
        <Grid sm={12} md={6} lg={4}>
          <Paper elevation={3}>
            <TextField fullWidth variant='outlined' label='Retype Password'></TextField>
          </Paper>
        </Grid>
        
        <Grid sx={{textAlign:'center'}} sm={12} md={12} lg={12}>
            <Button sx={{margin:'20px 0px'}} variant='contained'>Submit</Button>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}

export default App;
