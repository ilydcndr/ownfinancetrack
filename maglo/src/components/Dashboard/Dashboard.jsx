const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.fullname || user.email}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};
export default Dashboard;
