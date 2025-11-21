import { useAuth } from "../../context/AuthContext";
import { RecentTransactions, SideBar, Wallet, WorkingCapital, Total, ScheduledTransfers } from '../index';


const DashboardHome = () => {

    return (
        <div className="row">
            <div className="col-8">
                <div className="d-flex flex-column h-100">
                    <div className="flex-grow-2 mt-2">
                        <Total />
                    </div>
                    <div className="flex-grow-5">
                        <WorkingCapital />
                    </div>
                    <div className="flex-grow-5">
                        <RecentTransactions />
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="d-flex flex-column h-100">
                    <div className="flex-fill">
                        <Wallet />
                    </div>
                    <div className="flex-fill mt-md-4">
                        <ScheduledTransfers />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome