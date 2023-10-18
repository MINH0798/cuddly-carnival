
import Header from '../components/Header';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function DemoView() {
  return (
    <div>
      <Header />
      <main>
       
        <div style={{ marginBottom: '1rem', padding: '1.5rem', marginTop: '5rem', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            My Project
          </Typography>
          
$
          <div style={{ display: 'flex', alignItems: 'center'}}>
          <Typography variant="body1" sx={{ fontWeight: 'bold', display: 'inline' }}>
                Search Bar
              </Typography>

            <TextField
            sx={{
              marginleft:'10rem',
        backgroundColor: '#f8f8f8',
        '& .MuiOutlinedInput-root': {
          borderRadius: '5px', 
          '& fieldset': {
            border: 'yes', 
          },
          '&:hover fieldset': {
            border: 'yes', 
          },
        },
      }}
      type="text"
      placeholder="Enter something..."
      fullWidth
    />
          </div>
        </div>
      </main>

      <Grid container spacing={1}>
        {Array.from({ length: 9 }, (_, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <a href="https://myaccount.google.com/?utm_source=chrome-profile-chooser&pli=1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Paper elevation={3} style={{ background: '#d9d9d8', width: "20rem", height: "20rem", padding: "1rem" ,margin:"4rem"}}>
             
              </Paper>
            </a>
          </Grid>
        ))}
      </Grid>
      
       
        




      


    </div>
  );
}