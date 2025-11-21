import { useAuth } from "../../context/AuthContext";
import RecentTransactionSkeleton from "./RecentTransactionSkeleton";
import TransactionItem from "./TransactionItem";
import "./RecentTransactions.scss"

const RecentTransactions = () => {

    const { user } = useAuth();
    const transactions = user?.financialTransactionsRecent?.[0]?.transactions;

    return (
        <>
            <div className="row mb-4 mt-5">
                <div className="col-6 section-title fw-semibold text-start">Recent Transaction</div>
                <div className="col-6 section-view fw-semibold text-end">View All →</div>
            </div>
            <div className="row fw-semibold transactions-header mb-4">
                <div className="col-3 text-start">NAME/BUSINESS</div>
                <div className="col-3 text-center">TYPE</div>
                <div className="col-3 text-center">AMOUNT</div>
                <div className="col-3 text-end">DATE</div>
            </div>

            {!user || !user?.financialTransactionsRecent?.[0]?.transactions ? (
                <RecentTransactionSkeleton />
            ) : (
                transactions.map((item, i) => (
                    <TransactionItem key={i} transaction={item} />
                ))
            )}

        </>
    );
};
export default RecentTransactions;
