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

export default function OsignUp() {
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    //send data to backend using axios






    const Organization = {
        email: data.get('email'),
        password: data.get('password'),
        name: data.get('name'),
        address: data.get('Address'),
        type: data.get('type'),

      

       
    }
    axios.post('http://localhost:3100/organization', {
        email: Organization.email,
        password: Organization.password,
        name: Organization.name,
        address: Organization.address,
        type: Organization.type,
        followers: [],
        events: [],
     
    }).then((response) => {
        


        if(response.data === 'success'){
            window.location.href = 'http://localhost:3000/';
          
        }
    });


    console.log({
        Organization }); 
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
            <Typography sx={{m:2}} component="h1" variant="h5">
            Organization    Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Organization Name"
                name="name"
                type='text'
              
                autoFocus
              />
               <TextField
                margin="normal"
                required
                fullWidth
                id="type"
                label="Type"
                name="type"
                type='text'
            
                autoFocus
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
                id="Address"
                label="Address"
                name="Address"
                type='text'
              />
               



             

              <Button name="Sign Up" />
              
              <Grid container>
              
                <Grid item xs>
                  <Link href="/login" variant="body2">
                    {"Do you want to login?  Sign In  "}
                  </Link>
                </Grid>
                <Grid item>
                <Link href="/signup" variant="body2">
                    {"SignUp as User?"}
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