import { RecentTransactions, SideBar, Wallet, WorkingCapital, Total, ScheduledTransfers } from '../index';


const DashboardHome = () => {

    return (
        <div className="row">
            <div className="col-xl-8 col-12">
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
            <div className="col-xl-4 col-12">
                <div className="d-flex flex-column h-100 right-end">
                    <div className="flex-fill mt-4 mt-xl-0 px-4 px-xl-0">
                        <Wallet />
                    </div>
                    <div className="flex-fill mt-5 mt-xl-4">
                        <ScheduledTransfers />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome