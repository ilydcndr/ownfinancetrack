import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import ScheduledTransfersSkeleton from './ScheduledTransfersSkeleton';
import ScheduledItem from "./ScheduledItem";


const ScheduledTransfers = () => {
    const { user } = useAuth();

    const [transfers, setTransfers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTransfers = async () => {
        try {
            setLoading(true);

            const res = await fetch("http://localhost:5737/api/financial/transfers/scheduled", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user?.token}`,
                },
            });
            if (!res.ok) throw new Error("Veri çekilemedi");
            const data = await res.json();
            setTransfers(data?.data?.transfers || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTransfers();
    }, []);

    if (error) return <p>Hata: {error}</p>;

    return (
        <div>
            <div className="d-flex justify-content-between row">
                <p className="col-6">Scheduled Transfers</p>
                <p className="col-6">View All</p>
            </div>
            {loading ? (
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