import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import MarriageForm from './Components/MarriageForm/MarriageForm';
import Users from './Components/Users/Users'
import Client from './Components/Clients/Client';
import ClientRequest from './Components/Clients/ClientRequest';
import ClientProfile from './Components/ClientProfile/ClientProfile';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/marriage' element={<MarriageForm/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/Clients' element={<Client/>} />
        <Route path='/ClientsRequest' element={<ClientRequest/>} />
        <Route path='/ClientProfile' element={<ClientProfile/>} />
      </Routes>
    </Router>
  );
}

export default App;
