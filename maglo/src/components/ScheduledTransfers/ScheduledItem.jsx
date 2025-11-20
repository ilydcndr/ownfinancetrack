import { formatDate } from "../../utils/formatDate";
import { formatUSD } from '../../utils/formatCurrency';
const ScheduledItem = ({ transfer }) => {

    const date = new Date(transfer.date);

    return (
        <div>
            <div className="d-flex justify-content-between row transfer-item mt-4">
                <div className="col-6 d-flex justify-content-start align-items-center">
                    <img className="rounded-circle" src={transfer.image} />
                    <div className="d-flex flex-column transfer-item-text">
                        <p className="fw-semibold transfer-title">{transfer.name}</p>
                        <p className="fw-medium transfer-subtitle">{formatDate(date, 'en')}</p>
                    </div>
                </div>
                <div className="col-6 text-end d-flex justify-content-end align-items-center fw-semibold transfer-amount">{formatUSD(transfer.amount)}</div>
            </div>
        </div>
    );
};

export default ScheduledItem;