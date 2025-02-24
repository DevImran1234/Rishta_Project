import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Login from "./Screens/Login/Login";
import Signup from "./Screens/Signup/Signup";
import MarriageForm from "./Screens/MarriageForm/MarriageForm";
import Users from "./Screens/Users/Users";
import Client from "./Screens/Clients/Client";
import ClientProfile from "./Screens/ClientProfile/ClientProfile";
// import Home from './Components/Home/Home';
// import Login from './Components/Login/Login';
// import Signup from './Components/Signup/Signup';
// import MarriageForm from './Components/MarriageForm/MarriageForm';
// import Users from './Components/Users/Users';
// import Client from './Components/Clients/Client';
// import ClientProfile from './Components/ClientProfile/ClientProfile';
import OtherClients from "./Components/OtherClients/OtherClients";
import SendRequest from "./Components/SendRequest/SendRequest";
import Loader from "./Components/Loader/Loader";
import ReceivedRequest from "./Components/ReceivedRequest/Request";
import Profile from "./Screens//Profile/Profile";
import AcceptRequest from "./Screens/AcceptRequest/Accept";
import Religious from "./Screens/ReligiousProfile/Religious";
import Message from "./Screens/Messages/Message";
import Clientprofession from "./Components/ClientProfession/Clientprofession";
import Family from "./Components/Family/Family";
import Partner from "./Components/Partner/partner";
import Against from "./Components/ClientAgainstRequest/Against";

import Caste from "./Components/caste/caste";
import UserReligion from "./Components/UserReligion/UserReiligion";
import Section from "./Components/Section/Section";
import UserHeight from "./Components/Height/Height";
import UserResidence from "./Components/UserResidence/UserResidence";
import UserFavourites from "./Components/UserFavourites/UserFavourites";
import UserCreateProfile from "./Screens/UserCreateProfile/UserCreateProfile";

import Userpartner from "./Screens/UserPartnerDetails/UserPartner";
import UserProfile from "./Components/UserProfile/UserProfile";
import Settings from "./Screens/Settings/Settings";
import Payment from "./Screens/Payment/Payment";
import Delete from "./Components/Delete/Delete";
import Dashboard from "./Screens/Dashboard";
import Portal from "./Screens/Portal";
import Userlist from "./Screens/UsersData/Userlist";
import UserCreate from "./Screens/UsersData/UserCreate";
import Userview from "./Screens/UsersData/UserView";
import UserEdit from "./Screens/UsersData/UserEdit";
import OtpScreen from "./Screens/otp/Otp";
import ProtectedRoute from "./ProtectedRoute";
import SubscriptionForm from "./Screens/PaymentOption/PaymentOption";
import UsersSide from "./Screens/UsersSide/UsersSide";
import UserReligious from "./Screens/UserReligionProfile/UserReligionProfile";
import UserProfessional from "./Screens/UserProfessional/UserProfessional";
import UserFamily from "./Screens/UserFamily/UserFamily";
import UserCreateProfileEdit from "./Screens/UserCreateProfileEdit/UserCreateProfileEdit";
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
        <Route path="/Messages/:clientName" element={<ProtectedRoute><Message /></ProtectedRoute>} />
        <Route path="/clients" element={<ProtectedRoute><Client /></ProtectedRoute>} />
        <Route path="/client-profile" element={<ProtectedRoute><ClientProfile /></ProtectedRoute>} />
        <Route path="/Client-profession" element={<ProtectedRoute><Clientprofession /></ProtectedRoute>} />
        <Route path="/other-clients" element={<ProtectedRoute><OtherClients /></ProtectedRoute>} />
        <Route path="/send-requests" element={<ProtectedRoute><SendRequest /></ProtectedRoute>} />
        <Route path="/received-request" element={<ProtectedRoute><ReceivedRequest /></ProtectedRoute>} />
        <Route path="/accept-request" element={<ProtectedRoute><AcceptRequest /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/client-religious" element={<ProtectedRoute><Religious /></ProtectedRoute>} />
        <Route path="/Family" element={<ProtectedRoute><Family /></ProtectedRoute>} />
        <Route path="/partner-details" element={<ProtectedRoute><Partner /></ProtectedRoute>} />
        <Route path="/AgainstRequest" element={<ProtectedRoute><Against /></ProtectedRoute>} />
        <Route path="/users-side" element={<ProtectedRoute><UsersSide /></ProtectedRoute>} />
        <Route path="/cast" element={<ProtectedRoute><Caste /></ProtectedRoute>} />
        <Route path="/user-religion" element={<ProtectedRoute><UserReligion /></ProtectedRoute>} />
        <Route path="/Section" element={<ProtectedRoute><Section /></ProtectedRoute>} />
        <Route path="/user-height" element={<ProtectedRoute><UserHeight /></ProtectedRoute>} />
        <Route path="/user-residence" element={<ProtectedRoute><UserResidence /></ProtectedRoute>} />
        <Route path="/user-favourite" element={<ProtectedRoute><UserFavourites /></ProtectedRoute>} />
        <Route
            path="/UserCreate-profile"
            element={
              <ProtectedRoute>
                <UserCreateProfile />
              </ProtectedRoute>
            }
          />        
        <Route
            path="/UserEditProfile/:id"
            element={
              <ProtectedRoute>
                <UserCreateProfileEdit />
              </ProtectedRoute>
            }
          />        
          
          <Route path="/UserCreate-Religion" element={<ProtectedRoute><UserReligious /></ProtectedRoute>} />
        <Route path="/UserProfession" element={<ProtectedRoute><UserProfessional /></ProtectedRoute>} />
        <Route path="/UserFamily" element={<ProtectedRoute><UserFamily /></ProtectedRoute>} />
        <Route path="/UserPartner" element={<ProtectedRoute><Userpartner /></ProtectedRoute>} />
        <Route path="/UserProfile/:id" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
        <Route path="/Settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
        {/* <Route path="/DeleteAccount" element={<Delete />} /> */}
        <Route path="/portal" element={<Portal />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/portal/user-list" element={<Userlist />} />
        <Route path="/portal/create-user" element={<UserCreate />} />
        <Route path="/portal/user-view/:id" element={<Userview />} />
        <Route path="/portal/user-edit/:id" element={<UserEdit />} />
        <Route path="/otp" element={<OtpScreen />} />
        <Route path="/subscribe" element={<SubscriptionForm/>}/>
      </Routes>
    </Router>
  );
};

export default App;
