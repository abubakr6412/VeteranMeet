import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '../components/button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VeteranImage from '../images/Veteran.png';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
       Veteran Meet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [hobbies, setHobbies] = React.useState('PlantationDrive');
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    //send data to backend using axios






    const User = {
        email: data.get('email'),
        password: data.get('password'),
        firstName: data.get('firstName'),
        lastName: data.get('LastName'),
        dob: data.get('DOB'),
        profession: data.get('profession'),
        address: data.get('Address'),
        hobbies: hobbies,
        stars: 500,
        followers: [],
        events: [],

      

       
    }
    axios.post('http://localhost:3100/signup', {
      email: data.get('email'),
        password: data.get('password'),
        firstName: data.get('firstName'),
        lastName: data.get('LastName'),
        dob: data.get('DOB'),
        profession: data.get('profession'),
        address: data.get('Address'),
        hobbies: hobbies,
        stars: 500,
        followers: [],
        events: [],
     
    }).then((response) => {
        


        if(response.data === 'success'){
            window.location.href = 'http://localhost:3000/login';
          
        }
    });


    console.log({
        User }); 
};

   


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        
        <CssBaseline />
        
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${VeteranImage})`,
            backgroundSize: '68%',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            bottom: '20px',
            right: '-80px',
        


          }}
        
        />
        
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: -2, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography sx={{m:1}} component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                type='text'
              
                autoFocus
              />
               <TextField
                margin="normal"
                required
                fullWidth
                id="LastName"
                label="Last Name"
                name="LastName"
                type='text'
            
                autoFocus
              />

              
              <TextField
                margin="normal"
                required
                fullWidth
                name="DOB"
                label="Date of Birth"
                type="date"
                id="DOB"
                
              />
      
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />


<TextField
                margin="normal"
                required
                fullWidth
                id="profession"
                label="Profession"
                name="profession"
                type='text'
            
                autoFocus
              />
              <TextField
                margin="normal" 
                required
                fullWidth
                id="Address"
                label="Address"
                name="Address"
                type='text'
              />
                  <TextField id="select" label="hobbies"  onChange={
                            (e) => {
                                setHobbies(e.target.value);
                            }
                        }
                         value={hobbies} select>
                           <MenuItem value="PlantationDrive">Plantation Drive</MenuItem>
                            <MenuItem value="Public Talk">Public Talk</MenuItem>
                            <MenuItem value="Professional Talk">Professional Talk</MenuItem>
                            <MenuItem value="Professional Task">Professional Task</MenuItem>
                            <MenuItem value="Orphanage Visit">Orphange Visit</MenuItem>
                            <MenuItem value="Patient Visit">Patient Visit</MenuItem>
                            <MenuItem value="Recreational Visit">Recreational Visit</MenuItem>
                            <MenuItem value="Old Home Visit">Old Home Visit</MenuItem>
                            <MenuItem value="Book Reading">Book Reading</MenuItem>



                      </TextField>
              



             

              <Button name="Sign Up" />
              
              <Grid container>
              
                <Grid item xs>
                  <Link href="/login" variant="body2">
                    {"Do you want to login?  Sign In  "}
                  </Link>
                </Grid>
                <Grid item>
                <Link href="/osignup" variant="body2">
                    {"SignUp as Organization "}
                  </Link>
                  </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}