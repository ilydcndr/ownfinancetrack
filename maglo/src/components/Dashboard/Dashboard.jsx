import { useAuth } from "../../context/AuthContext";
import { TopMenu, RecentTransactions, SideBar, Wallet, WorkingCapital, Total, ScheduledTransfers } from '../../components/index';

const Dashboard = ({ user }) => {

  if (!user) return <p>Loading...</p>
  return (
    <div className="row">
      <h1>Welcome, {user.fullName}</h1>
      <p>Email: {user.email}</p>
      <div className="col-md-3">
        {/*<SideBar/>*/}
      </div>
      <div className="col-md-5 row">
        <div className="col-2">
          {/*<Total/>*/}
        </div>
        <div className="col-5">
          {/*<WorkingCapital/>*/}
        </div>
        <div className="col-md-5 w-100">
          <RecentTransactions/>
        </div>
      </div>
      <div className="col-md-4 row">
        <div className="col-12">
          <div className="col-md-1">
            {/*<TopMenu/>*/}
          </div>
          <div className="col-md-5">
            {/*<Wallet userInfo={user}/>*/}
          </div>
          <div className="col-md-6 w-100">
            {/*<ScheduledTransfers />*/}
          </div>

        </div>

      </div>
    </div>
  );
};
export default Dashboard;
