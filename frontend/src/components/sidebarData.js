//import icons from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import EventIcon from '@mui/icons-material/Event';



const sidebarData=[
    {
        name: 'Home',
        icon: <HomeIcon />,
        link: '/home'
    },
    {
        name: 'Profile',
        icon: <PersonIcon />,
        link: '/profile'
    },
    {
        name: 'Follow Events',
        icon: <BusinessIcon />,
        link: '/followevents'

    },
    {
        name: 'Create Events',
        icon: <EventIcon />,
        link: '/createevents'
    },
    {
        name: 'Follow Veterans',
        icon: <PersonIcon />,
        link: '/veterans'
    }
    ,
    {
        name: 'Veterans Posts',
        icon:<PersonIcon />,
        link: '/veteransPosts'
    },
    {
        name:'My Events',
        icon:<EventIcon />,
        link:'/myevents'
    },
    {
        name:'My Invitations',
        icon:<EventIcon />,
        link:'/invitations'
    }
    ,
    {
        name:'Invite',
        icon:<EventIcon />,
        link:'/invite'
    }
]
export default sidebarData;