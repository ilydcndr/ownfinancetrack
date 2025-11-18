import ScheduledTransfers from "../ScheduledTransfers/ScheduledTransfers";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <ScheduledTransfers/>
      <h1>Welcome, {user.fullname || user.email}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};
export default Dashboard;
