const TransactionItem = ({ transaction }) => {
    return (
        <div className="row">
            <div className="col-3 d-flex align-items-center">
                <div className="skeleton skeleton-circle shimmer me-2"></div>
                <div>
                    <div className="skeleton skeleton-line shimmer" style={{ width: '80%' }}></div>
                    <div className="skeleton skeleton-line shimmer" style={{ width: '60%' }}></div>
                </div>
            </div>

            <div className="col-3">
                <div className="skeleton skeleton-line shimmer" style={{ width: '90%', height: '20px' }}></div>
            </div>
            <div className="col-3">
                <div className="skeleton skeleton-line shimmer" style={{ width: '70%', height: '20px' }}></div>
            </div>
            <div className="col-3">
                <div className="skeleton skeleton-line shimmer" style={{ width: '50%', height: '20px' }}></div>
            </div>
        </div>

    );
};

export default TransactionItem;