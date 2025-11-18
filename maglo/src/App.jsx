import './App.scss'
import Logo from './assets/logos/maglo-logo.svg';
import Stick from './assets/logos/stick.svg';
import Google from './assets/logos/google.png';
import MainImg from './assets/images/main-img.svg';
import SignupForm from './components/SignupForm/SignupForm';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import { useState, useEffect } from "react";

const App = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    console.log(JSON.stringify(userData), "localst")
    console.log(userData, "userdata")
  };

  const handleSignUp = (newUserData) => {
    setIsSignIn(true)
    localStorage.setItem("user", JSON.stringify(newUserData));
  };

  if (user) {
    return <Dashboard user={user} />;
  }

  return (
    <div className='row'>
      <div className='col-6 main-left'>
        <img src={Logo} alt='Logo' />

        {isSignIn ?
          <LoginForm onSignIn={handleLogin} />
          : <SignupForm onSignUp={handleSignUp} />
        }

        <div className="auth-container">
          <div className='auth-title d-flex justify-content-center align-items-start'>
            <img src={Google} alt="Sign in with Google"/>
              {isSignIn ? "Sign up with google" : "Sign in with google"}
          </div>

          <div className='d-flex justify-content-center align-items-start mt-2'>
            <p className="auth-subtitle">
                {isSignIn 
                  ? "Don’t have an account? " 
                  : "Already have an account? "}
                <span 
                  className="auth-bold" 
                  onClick={() => setIsSignIn(!isSignIn)}
                >
                  {isSignIn ? "Sign up" : "Sign in"}
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