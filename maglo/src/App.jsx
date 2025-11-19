import './App.scss'
import Logo from './assets/logos/maglo-logo.svg';
import Google from './assets/logos/google.png';
import MainImg from './assets/images/main-img.svg';
import SignupForm from './components/SignupForm/SignupForm';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import { useState, useEffect } from "react";
import { useAuth } from "./context/AuthContext";
const API = import.meta.env.VITE_API_URL;

const App = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const { user, setUser } = useAuth();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData, token) => {
    console.log(userData,"userdataaaa")
    setUser({ ...userData, token });
    localStorage.setItem("user", JSON.stringify({ ...userData, token }));
  };

  const handleSignUp = () => {
    setShowSignIn(true)
  };

  if (user) {
    return  <Dashboard user={user} /> 
  }

  return (
    <div className='row'>
      <div className='col-6 main-left'>
        <img src={Logo} alt='Logo' />

        {showSignIn ?
          <LoginForm onSignIn={handleLogin} />
          : <SignupForm onSignUp={handleSignUp} />
        }

        <div className="auth-container">
          <div className='auth-title d-flex justify-content-center align-items-start'>
            <img src={Google} alt="Sign in with Google"/>
              {showSignIn ? "Sign up with google" : "Sign in with google"}
          </div>

          <div className='d-flex justify-content-center align-items-start mt-2'>
            <p className="auth-subtitle">
                {showSignIn 
                  ? "Don’t have an account? " 
                  : "Already have an account? "}
                <span 
                  className="auth-bold" 
                  onClick={() => setShowSignIn(!showSignIn)}
                >
                  {showSignIn ? "Sign up" : "Sign in"}
                </span>
            </p>
          </div>
        </div>
      </div>
      <div className='col-6 main-img'>
        <img className='text-end' src={MainImg} alt="main image" />
      </div>
    </div>
  )
}

export default App