import { Routes, Route } from "react-router-dom";
import { TopMenu, SideBar } from '../index';
import { DashboardHome, Transactions } from '../../components/index';

const DashboardLayout = () => {

  return (
    <div className="d-flex row">
      <div className="col-xl-2 col-12">
        <SideBar />
      </div>

      <div className="flex-1 col-xl-10 col-12 px-4 px-md-5 px-xl-0">
        <div className="col-12 mt-xl-4 topmenu">
          <TopMenu />
        </div>
        <div className="col-12">
          <Routes>
            <Route path="Dashboard" element={<DashboardHome />} />
            <Route path="transactions" element={<Transactions />} />
            {/*<Route path="invoices" element={<Invoices />} />
            <Route path="walletdetail" element={<WalletDetail/>} />
            <Route path="settings" element={<Invoices />} />*/}
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
