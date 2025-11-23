import { BasicSkeletons } from '../index';

const RecentTransactionSkeleton = () => {
    return (
        <>
            <BasicSkeletons
                items={[
                    { width: "5%", height: "30px", circle: true },
                    { width: "20%", height: "30px" },
                    { width: "20%", height: "30px" },
                    { width: "20%", height: "30px" }
                ]}
                direction="row"
                margin="50px 0 20px 0"
                justifyContent="space-between"
            />
            <BasicSkeletons
                items={[
                    { width: "5%", height: "30px", circle: true, gap: "20%" },
                    { width: "20%", height: "30px" },
                    { width: "20%", height: "30px" },
                    { width: "20%", height: "30px" }
                ]}
                direction="row"
                margin="20px 0"
                justifyContent="space-between"
            />
            <BasicSkeletons
                items={[
                    { width: "5%", height: "30px", circle: true, gap: "20%" },
                    { width: "20%", height: "30px" },
                    { width: "20%", height: "30px" },
                    { width: "20%", height: "30px" }
                ]}
                direction="row"
                margin="20px 0"
                justifyContent="space-between"
            />
        </>
    );
};

export default RecentTransactionSkeleton;