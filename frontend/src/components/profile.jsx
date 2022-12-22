import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Button from '@mui/material/Button';
import sidebarData from './sidebarData.js';
import Link from '@mui/material/Link';
import { useEffect } from 'react';
import { Avatar } from '@mui/material';
import Axios from 'axios';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';




const drawerWidth = 240;

function MyEvents(props) {
  const { window1 } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
const [id, setId] = useState(sessionStorage.getItem('id'));
const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
const [fname, setFname] = useState(user.firstName);
const [lname, setLname] = useState(user.lastName);
const [email, setEmail] = useState(user.email);
const [dob, setDob] = useState(user.dob);
const [profession, setProfession] = useState(user.profession);
const [address, setAddress] = useState(user.address);
const [hobbies, setHobbies] = useState(user.hobbies);








//get id from parameter
//run on page load
// const { id } = useParams();
// console.log(id);


useEffect(() => {
 
  
//wait for user to be set
    while(user === 0){
        console.log('waiting for user');
    }
    console.log('user set');
  
 

 
//get events of user from database







}, [id]);







  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {sidebarData.map((text, index) => (
          <ListItem key={text.name} disablePadding>
            <Link href={text.link}  underline="none" color="inherit">
            <ListItemButton  >
              <ListItemIcon>
                {text.icon}
               
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
  
     

    </div>
  );

 
  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  

  const container = window1 !== undefined ? () => window1().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        
        <Toolbar>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          > 
        
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Veteran Meet
          </Typography> 
     
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button onClick={function(){
                  sessionStorage.clear();
                  alert("You have been logged out"
       );
                
                  window.location.href = '/';
                }} color="inherit">
                    <Avatar {...stringAvatar(user.firstName + " " + user.lastName)} />
                  <Link href="/login" variant="h6" underline="none" color="inherit">LogOut</Link></Button>
            </Box>
           

          
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography color="primary" variant="h4" component="h6"  ml={46} >
     
       
      
       Welcome  <span className='fName'>{user.firstName}</span> {user.lastName} to Veteran Meet
       </Typography>
       <br />
       <Divider />

       <Paper >
                    <form className="centerMyForm"> {/* We add your custom class name here to center the form */}
                        
                    <Box padding={1}>
                            <TextField 
                             id="outlined-basic" onChange={
                              e => {
                                setFname(e.target.value);
                              }
                             } fullWidth rows={3} variant="outlined" value={fname} label="First Name"/>
                        </Box>
                        <Box padding={1}>
                            <TextField 
                            onChange={
                              e => {
                                setLname(e.target.value);
                              }
                            }
                             id="outlined-basic" fullWidth rows={3} variant="outlined" value={lname} label="First Name"/>
                        </Box>
                        <Box padding={1}>
                            <TextField 
                            onChange={
                              e => {
                                setEmail(e.target.value);
                              }
                            }
                             id="outlined-basic" fullWidth rows={3} variant="outlined" value={email} label="Email"/>
                        </Box>
                        <Box padding={1}>
                            <TextField 
                            onChange={
                              e => {
                                setDob(e.target.value);
                              }
                            }

                             id="outlined-basic" fullWidth rows={3} variant="outlined" value={dob} label="Date of Birth"/>
                        </Box>
                        
                        <Box padding={1}>
                            <TextField 
                            onChange={
                              e => {
                                setProfession(e.target.value);
                              }
                            }

                             id="outlined-basic" fullWidth rows={3} variant="outlined" value={profession} label="Profession"/>
                        </Box>
                        <Box padding={1}>
                            <TextField 
                            onChange={
                              e => {
                                setAddress(e.target.value);
                              }
                            }
                             id="outlined-basic" fullWidth rows={3} variant="outlined" value={address} label="Address"/>
                        </Box>

                        <Box width={800} padding={1}> 
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
                        </Box>
                      
                       
                        <Box className='Post' padding={1}>
                            <Button
                            
                            onClick={function(){
                              const data = {
                                firstName: fname,
                                lastName: lname,
                                email: email,
                                dob: dob,
                                profession: profession,
                                address: address,
                                hobbies: hobbies
                              }
                              console.log(data);
                              Axios.post('http://localhost:3100/updateProfile/'+id, data)
                              .then(res => {
                                console.log(res);
                                    //update session storage
                                    sessionStorage.setItem('user', JSON.stringify(res.data));

                                    window.location.reload();

                                alert("Profile Updated Successfully");
                               
                              }
                              )

                            }}
                            fullWidth    variant="contained" color="primary">Update</Button>
                          
                        </Box>
                        
                    </form>
                </Paper>


                    

       



      
        <br/>


      </Box>
    </Box>




  );
}

MyEvents.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window1: PropTypes.func,
};

export default MyEvents;
