import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import RecentTransactionSkeleton from "./RecentTransactionSkeleton";
import TransactionItem from "./TransactionItem";

const RecentTransactions = () => {

    const { user } = useAuth();

    const [Transactions, setTransactions] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTransactions = async () => {
        try {
            setLoading(true);

            const res = await fetch("http://localhost:5737/api/financial/transactions/recent?limit=20", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user?.token}`,
                },
            });
            if (!res.ok) throw new Error("Veri çekilemedi");
            const data = await res.json();
            setTransactions(data?.data?.transactions || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    if (error) return <p>Hata: {error}</p>;

    return (
        <>
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6"></div>
            </div>
            {loading ? (
                <RecentTransactionSkeleton />
            ) : (
                Transactions.map((item, i) => (
                    <TransactionItem key={i} transaction={item} />
                ))
            )}

        </>
    );
};
export default RecentTransactions;
