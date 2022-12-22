import logo from './logo.svg';
import './App.css';
import SideBar from '../src/components/sideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';

//Abubakr update
import SignUp from './pages/signup';
import Profile from './components/profile';
import FollowVeterans from './components/followVeterans';
import VeteranPosts from './components/veteranPosts';
import CreateEvent from './components/createEvent';
import FollowEvents from './components/followEvent';
import MyEvents from './components/myEvents';
import OsignUp from './pages/osignup';
import Ologin from './pages/ologin';
import Ohome from './components/ohome';
import OCreateEvent from './components/ocreateEvent';
import Homepage from './components/homepage';
import Invitations from './components/invitations';
import Invite from './components/invite';
import OInvite from './components/oinvite';
function App() {
  return (
    <BrowserRouter>    
    
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/ologin" element={<Ologin/>} />
      <Route path="/osignup" element={<OsignUp/>} />
       <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<SideBar />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/followevents" element={<FollowEvents/>} />
      <Route path="/createevents" element={<CreateEvent/>} />
      <Route path="/veterans" element={<FollowVeterans />} />
      <Route path="/veteransPosts" element={<VeteranPosts />} />
      <Route path="/myevents" element={<MyEvents />} />
      <Route path="/ohome" element={<Ohome />} />
      <Route path="/ocreateevents" element={<OCreateEvent/>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="/invitations" element={<Invitations/>} />
      <Route path="/invite" element={<Invite/>} />
      <Route path="/oinvite" element={<OInvite/>} />

    </Routes>

    </BrowserRouter>

  );
}

export default App;
