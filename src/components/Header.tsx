import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '/src/assets/gandalf.svg'

export default function Header() {
  return (
    <Box>
      <AppBar sx= {{bgcolor:'greenyellow'}}>
        <Toolbar>
          <Box 
          component='img'
          display = 'flex'
          sx={
            {
              height:54,
              borderRadius: 2,
              m: 1.75
            }
          }
          alt='logo'
          src= {Logo}
          />
          <Typography component='div' variant='h6' flexGrow={1}>
            Ganttalf
          </Typography>
          <Button color='inherit' href='/login'> Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
