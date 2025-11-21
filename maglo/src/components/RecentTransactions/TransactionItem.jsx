import { formatDate } from './../../utils/formatDate';
import { formatUSD } from './../../utils/formatCurrency';

const TransactionItem = ({ transaction }) => {
    const date = new Date(transaction.date);

    return (
        <div className="row transaction-item d-flex justify-content-center align-items-center mb-4 mt-3">
            <div className="col-3 d-flex align-items-center text-center">
                <img src={transaction.image}/>
                <div>
                    <div className="fw-medium transaction-item-title text-nowrap">{transaction.name}</div>
                    <div className="transaction-item-brand text-nowrap">{transaction.business}</div>
                </div>
            </div>

            <div className="col-3 transaction-item-type text-center">
                {transaction.type}
            </div>
            <div className="col-3 text-center fw-semibold">
                {formatUSD(transaction.amount)}
            </div>
            <div className="col-3 transaction-item-date text-end">
                {formatDate(date,"tr")}
            </div>
        </div>
    );
};

export default TransactionItem;