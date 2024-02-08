import './App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function App() {
  return (
    <Box >
    <h1>
      React project in grid responsive
    </h1>

    <Grid container spacing={3}>
        <Grid item xs={12} sx={{backgroundColor:'lightgray'}}>
          Number 1
        </Grid>
        <Grid item xs={6} sx={{backgroundColor:'lightgreen'}}>
        Number 2        
        </Grid>
        <Grid item xs={6} sx={{backgroundColor:'yellow'}}>
        Number 3       
         </Grid>
        <Grid item xs={3} sx={{backgroundColor:'lightblue'}}>
        Number 4
        </Grid>
        <Grid item xs={3} sx={{backgroundColor:'yellow'}}>
        Number 5
        </Grid>
        <Grid item xs={3} sx={{backgroundColor:'lightgreen'}}>
        Number 6
        </Grid>
        <Grid item xs={3} sx={{backgroundColor:'lightgray'}}>
        Number 7
        </Grid>
      </Grid>

    </Box>
  );
}

export default App;
