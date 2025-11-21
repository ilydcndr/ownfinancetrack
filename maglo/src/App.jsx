import './App.scss'
import { BrowserRouter } from "react-router-dom";
import {DashboardLayout, AuthPage }from './components/index';
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user, setUser } = useAuth();

  const handleUserLogin = (userData) => {
    setUser(userData)
  }

  return (
    <BrowserRouter>
      {!user && <AuthPage onLogin={handleUserLogin} user={user}/>}
      {user && <DashboardLayout />}
    </BrowserRouter>
  )
}

export default App