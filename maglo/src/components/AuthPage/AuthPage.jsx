import Logo from '../../assets/logos/maglo-logo.svg';
import Google from '../../assets/logos/google.png';
import MainImg from '../../assets/images/main-img.svg';
import { DashboardLayout, LoginForm, SignupForm } from '../../components/index';
import { useState, useEffect } from "react";
const API = import.meta.env.VITE_API_URL;

const AuthPage = ({ onLogin, user }) => {
  const [showSignIn, setShowSignIn] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      onLogin(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData, token) => {
    onLogin({ ...userData, token });
    localStorage.setItem("user", JSON.stringify({ ...userData, token }));
  };

  const handleSignUp = () => {
    setShowSignIn(true)
  };

  if (user) {
    return <DashboardLayout user={user} />
  }

  return (
    <div className='row min-vh-100 justify-content-center align-items-center mx-5 mx-xl-0'>
      <div className='col-xl-6 col-12 main-left'>
        <img src={Logo} alt='Logo' />

        {showSignIn ?
          <LoginForm onSignIn={handleLogin} />
          : <SignupForm onSignUp={handleSignUp} />
        }

        <div className="auth-container">
          <div className='auth-title d-flex justify-content-center align-items-start'>
            <img src={Google} alt="Sign in with Google" />
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
      <div className='col-xl-6 d-none d-xl-flex justify-content-end main-img'>
        <img className='mw-100' src={MainImg} alt="main image" />
      </div>
    </div>
  )
}

export default AuthPage