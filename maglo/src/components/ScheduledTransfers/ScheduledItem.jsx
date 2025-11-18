const ScheduledItem = ({ transfer }) => {
    return (
        <div>
            <div className="d-flex justify-content-between row">
                <div className="col-6">
                    <img />
                    <div>
                        <p>{transfer.name}</p>
                        <p>{transfer.date}</p>
                    </div>
                </div>
                <div className="col-6">{transfer.amount}</div>
            </div>
        </div>
    );
};

export default ScheduledItem;