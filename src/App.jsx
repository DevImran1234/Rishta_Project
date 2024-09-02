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
import ReceivedRequest from './Components/ReceivedRequest/Request'; // Uncomment and import if needed
import Profile from './Components/Profile/Profile'; // Uncomment and import if needed
import Religious from './Components/ReligiousProfile/Religious'; // Uncomment and import if needed
import AcceptRequest from './Components/AcceptRequest/Accept';
import Message from './Components/Messages/Message';
import Clientprofession from './Components/ClientProfession/Clientprofession';
import Family from './Components/Family/Family';
import Partner from './Components/Partner/partner';
import Against from './Components/ClientAgainstRequest/Against';

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
      </Routes>
    </Router>
  );
}

export default App;
