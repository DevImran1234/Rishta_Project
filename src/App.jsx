import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import MarriageForm from './Components/MarriageForm/MarriageForm';
import Users from './Components/Users/Users';
import Client from './Components/Clients/Client';
import ClientProfile from './Components/ClientProfile/ClientProfile';
import OtherClients from './Components/OtherClients/OtherClients';
import SendRequest from './Components/SendRequest/SendRequest';
import Loader from './Components/Loader/Loader';
import ReceivedRequest from './Components/ReceivedRequest/Request'; 
import Profile from './Components/Profile/Profile'; 
import Religious from './Components/ReligiousProfile/Religious';
import AcceptRequest from './Components/AcceptRequest/Accept';
import Message from './Components/Messages/Message';
import Clientprofession from './Components/ClientProfession/Clientprofession';
import Family from './Components/Family/Family';
import Partner from './Components/Partner/partner';
import Against from './Components/ClientAgainstRequest/Against';
import UsersSide from './Components/UsersSide/UsersSide';
import Caste from './Components/caste/caste';
import UserReligion from './Components/UserReligion/UserReiligion';
import Section from './Components/Section/Section';
import UserHeight from './Components/Height/Height';
import UserResidence from './Components/UserResidence/UserResidence';
import UserFavourites from './Components/UserFavourites/UserFavourites';
import UserCreateProfile from './Components/UserCreateProfile/UserCreateProfile';
import UserReligious from './Components/UserReligionProfile/UserReligionProfile';
import UserProfessional from './Components/UserProfessional/UserProfessional';
import UserFamily from './Components/UserFamily/UserFamily';
import Userpartner from './Components/UserPartnerDetails/UserPartner';
import UserProfile from './Components/UserProfile/UserProfile';
import Settings from './Components/Settings/Settings';
import Payment from './Components/Payment/Payment';
import Delete from './Components/Delete/Delete';
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/marriage" element={<MarriageForm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/Messages" element={<Message />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/client-profile" element={<ClientProfile />} />
        <Route path="/Client-profession" element={<Clientprofession />} />
        <Route path="/other-clients" element={<OtherClients />} />
        <Route path="/send-requests" element={<SendRequest />} />
        <Route path="/received-request" element={<ReceivedRequest />} />
        <Route path="/accept-request" element={<AcceptRequest />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/client-religious" element={<Religious />} />
        <Route path="/Family" element={<Family />} />
        <Route path="/partner-details" element={<Partner />} />
        <Route path="/AgainstRequest" element={<Against />} />
        <Route path="/users-side" element={<UsersSide/>} />
        <Route path="/cast" element={<Caste/>} />
        <Route path="/user-religion" element={<UserReligion/>} />
        <Route path="/Section" element={<Section/>} />
        <Route path="/user-height" element={<UserHeight/>} />
        <Route path="/user-residence" element={<UserResidence/>} />
        <Route path="/user-favourite" element={<UserFavourites/>} />
        <Route path="/UserCreate-profile" element={<UserCreateProfile/>} />
        <Route path="/UserCreate-Religion" element={<UserReligious/>} />
        <Route path="/UserProfession" element={<UserProfessional/>} />
        <Route path="/UserFamily" element={<UserFamily/>} />
        <Route path="/UserPartner" element={<Userpartner/>} />
        <Route path="/UserProfile" element={<UserProfile/>} />
        <Route path="/Settings" element={<Settings/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/DeleteAccount" element={<Delete/>} />
        {/* <Route path="/" element={<Home/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
