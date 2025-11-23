import { useAuth } from "../../context/AuthContext";
import TotalSkeleton from './TotalSkeleton';
import TotalItem from "./TotalItem";
import './Total.scss'
import { useState } from "react";

const Total = () => {

    const [activeBox, setActiveBox] = useState(0);
    const { user } = useAuth();
    const financialSummaries = user?.financialSummary

    const handleClick = (index) => {
        setActiveBox(prev => (prev === index ? null : index));
    }

    return (
        <div className="d-xl-flex block col-12">
            {!user || Object.keys(user.financialSummary).length === 0 ? (
                <TotalSkeleton />
            ) : (
                Object.keys(financialSummaries).map((key, index) => (
                    <TotalItem
                        isActiveBox={activeBox === index}
                        onClick={() => handleClick(index)}
                        key={index}
                        title={key}
                        content={financialSummaries[key].amount}
                    />
                ))
            )}
        </div>
    );
};
export default Total;