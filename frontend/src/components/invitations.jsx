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
import Paper from '@mui/material/Paper';
import {TextField} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';





const drawerWidth = 240;

function Invitations(props) {
  const { window1 } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
const [id, setId] = useState(0);
const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));

const [invitations, setInvitations] = useState([]);





useEffect(() => {
 
  

    setId(user._id);
    sessionStorage.setItem('id', id);
  

  Axios.get('http://localhost:3100/invitations/'+id).then((response) => {
    setInvitations(response.data);
    console.log(response.data);
});






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
    
         
        <Table>
            
            <TableHead>
                <TableRow>
             <TableCell> Event Name</TableCell>
             <TableCell>Event Stars</TableCell>
             <TableCell>Event description</TableCell>
             <TableCell>Event Time</TableCell>
             <TableCell>Accept</TableCell>
                <TableCell>Decline</TableCell>
            
             </TableRow>
            </TableHead>
          
            {
           
            

            Object.values(invitations).filter((invitation) => invitation !== null).map((invitation) => (

                <TableRow>
                    <TableCell>{invitation.ename}</TableCell>
                    <TableCell>{invitation.stars}</TableCell>
                    <TableCell>{invitation.description}</TableCell>
                    <TableCell>{invitation.time}</TableCell>
                    <TableCell><Button onClick={function(){
                        // acceptInvitation(invitation.eventId);
                        Axios.post('http://localhost:3100/veteran/invitation/'+id+"/"+invitation._id).then((response) => {
                            console.log(response);
                        }
                        );
                        alert("You have accepted the invitation");
                        window.location.reload();


                    }}>Accept</Button></TableCell>
                    <TableCell><Button onClick={function(){
                        // declineInvitation(invitation.eventId);


                        Axios.delete('http://localhost:3100/invitation/'+id+"/"+invitation._id).then((response) => {
                            console.log(response);
                        }
                        );
                        alert("You have declined the invitation");
                        window.location.reload();
                        
                    }}>Decline</Button></TableCell>
                </TableRow>
            ))}




        </Table>



                    

       



    
      
    
         




                  
                  
                  
                      
                    
                  
                

      </Box>
    </Box>




  );
}

Invitations.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window1: PropTypes.func,
};

export default Invitations;
