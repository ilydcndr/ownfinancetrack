const RecentTransactionSkeleton = () => {
    return (
        <div className="d-flex justify-content-between row my-3">
            <div className="col-6 d-flex align-items-center gap-2">
                <div className="skeleton skeleton-circle shimmer"></div>
                <div className="w-75">
                    <div className="skeleton skeleton-line shimmer" style={{ width: "80%" }}></div>
                    <div className="skeleton skeleton-line shimmer" style={{ width: "60%" }}></div>
                </div>
            </div>
            <div className="col-6">
                <div className="skeleton skeleton-line shimmer" style={{ width: "40%", marginLeft: "auto" }}></div>
            </div>
        </div>
    );
};

export default RecentTransactionSkeleton;