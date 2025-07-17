import React,{useState,useEffect} from 'react';
import './App.css';
import { Router, Routes, Route, Link, useNavigate  } from 'react-router-dom';
import StartGame from './Component/StartGame';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Test from './components/Test';
import axios from 'axios';
// import User from './Component/User';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080"; // Adjust port if needed

const App=()=> {

  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [onLogin,setOnLogin] = useState(false);

  useEffect(() => {
    // Try to fetch token or protected endpoint using cookie
    axios
      .get(`${BACKEND_URL}/token`, {
        withCredentials: true, // IMPORTANT for cookie to be sent
      })
      .then((res) => {
        // console.log("Authenticated as:", res.data.token);
        console.log("Authenticated ");
        setAuthenticated(true);
        setOnLogin(true);
        navigate("/Start");
      })
      .catch((err) => {
        console.log("Not authenticated");
        setAuthenticated(false);
      });
  }, [onLogin]);


  return (
      
      <div className="App" >
        <div className='Navbar'>
          <Link style={{textDecoration: 'none', color: 'green', fontWeight: 'bold',fontSize: 'large'}} to="/Home">Home</Link> 
          <Link style={{textDecoration: 'none', color: 'green', fontWeight: 'bold',fontSize: 'large'}} to="/">Game</Link> 
          <Link style={{textDecoration: 'none', color: 'green', fontWeight: 'bold',fontSize: 'large'}} to="/Start">Start</Link> 
          <Link style={{textDecoration: 'none', color: 'red', fontWeight: 'bold',fontSize: 'large'}} to="/logout">Logout</Link> 
        </div>
        <Routes>
          <Route path="/" element={<LoginButton />} />
          <Route path="/Home" element={<>
          <h1>Home Page</h1>
          <Test/>
          {/* <LogoutButton/> */}
          </>} />
          <Route path="/Start" element={<StartGame/>} />
          <Route path="/logout" element={<LogoutButton/>} />
          
        </Routes>
      </div>

  );
}

export default App;