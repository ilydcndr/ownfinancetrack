const TransactionItem = ({ transaction }) => {

        const date = new Date(transaction.date);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date).replace(',', ' at');;

    return (
        <div className="row">
            <div className="col-3 d-flex align-items-center">
                <div className=""></div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="col-3">
                <div>{transaction.type}</div>
            </div>
            <div className="col-3">
                <div>
                    {transaction.amount}
                </div>
            </div>
            <div className="col-3">
                <div>{transaction.date}</div>
            </div>
        </div>
    );
};

export default TransactionItem;