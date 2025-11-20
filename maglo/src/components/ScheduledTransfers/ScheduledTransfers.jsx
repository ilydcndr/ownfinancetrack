import { useAuth } from "../../context/AuthContext";
import ScheduledTransfersSkeleton from './ScheduledTransfersSkeleton';
import ScheduledItem from "./ScheduledItem";
import './ScheduledTransfers.scss'


const ScheduledTransfers = () => {
    const { user } = useAuth();
    const transfers = user?.financialTransfersScheduled[0]?.transfers;

    return (
        <div>
            <div className="d-flex justify-content-between row">
                <p className="col-6 section-title fw-semibold text-start">Scheduled Transfers</p>
                <p className="col-6 section-view fw-semibold text-end">View All →</p>
            </div>
            {!user || !user.financialTransfersScheduled[0].transfers ? (
                <ScheduledTransfersSkeleton />
            ) : (
                transfers.map((item, i) => (
                    <ScheduledItem key={i} transfer={item} />
                ))
            )}

        </div>
    );
};

export default ScheduledTransfers;