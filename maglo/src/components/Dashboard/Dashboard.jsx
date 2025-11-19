import ScheduledTransfers from "../ScheduledTransfers/ScheduledTransfers";
import { useAuth } from "../../context/AuthContext";
import Wallet from "../Wallet/Wallet";

const Dashboard = ({user}) => {

  return (
    <div>
      <div>{console.log(user,"dashboarda gelen")}</div>
      <Wallet userInfo = {user}/>
      <h1>Welcome, {user.fullName }!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};
export default Dashboard;
