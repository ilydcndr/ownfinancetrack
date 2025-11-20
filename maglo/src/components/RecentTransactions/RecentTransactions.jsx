import { useAuth } from "../../context/AuthContext";
import RecentTransactionSkeleton from "./RecentTransactionSkeleton";
import TransactionItem from "./TransactionItem";

const RecentTransactions = () => {

    const { user } = useAuth();
    const transactions = user?.financialTransactionsRecent[0]?.transactions;

    return (
        <>
            <div className="row">
                <div className="col-6 section-title fw-semibold text-start">Recent Transaction</div>
                <div className="col-6 section-view fw-semibold text-end">View All →</div>
            </div>
            {!user || !user?.financialTransactionsRecent[0]?.transactions ? (
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
