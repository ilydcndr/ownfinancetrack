import { Routes, Route } from "react-router-dom";
import { TopMenu, SideBar } from '../index';
import { DashboardHome } from '../../components/index';

const DashboardLayout = () => {

  return (
    <div className="d-flex row">
      <div className="col-2">
        <SideBar /> 
      </div>

      <div className="flex-1 col-10">
        <div className="col-12 mt-4 topmenu">
          <TopMenu />
        </div>
        <div className="col-12">
          <Routes>
            <Route path="" element={<DashboardHome />} />
            {/*<Route path="transactions" element={<Transactions />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="walletdetail" element={<WalletDetail/>} />
            <Route path="settings" element={<Invoices />} />*/}
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
