import { BasicSkeletons } from '../index';

const RecentTransactionSkeleton = () => {
    return (
        <>
            <BasicSkeletons
                items={[
                    { width: "10%", height: "25px", circle: true },
                    { width: "30%", height: "30px" },
                    { width: "30%", height: "30px" }
                ]}
                direction="row"
                margin="50px 0 20px 0"
                justifyContent="space-between"
            />
            <BasicSkeletons
                items={[
                    { width: "10%", height: "25px", circle: true, gap: "20%" },
                    { width: "30%", height: "30px" },
                    { width: "30%", height: "30px" }
                ]}
                direction="row"
                margin="20px 0"
                justifyContent="space-between"
            />
            <BasicSkeletons
                items={[
                    { width: "10%", height: "25px", circle: true, gap: "20%" },
                    { width: "30%", height: "30px" },
                    { width: "30%", height: "30px" }
                ]}
                direction="row"
                margin="20px 0"
                justifyContent="space-between"
            />
            <BasicSkeletons
                items={[
                    { width: "10%", height: "25px", circle: true, gap: "20%" },
                    { width: "30%", height: "30px" },
                    { width: "30%", height: "30px" }
                ]}
                direction="row"
                margin="20px 0"
                justifyContent="space-between"
            />
            <BasicSkeletons
                items={[
                    { width: "10%", height: "25px", circle: true, gap: "20%" },
                    { width: "30%", height: "30px" },
                    { width: "30%", height: "30px" }
                ]}
                direction="row"
                margin="20px 0"
                justifyContent="space-between"
            />
        </>
    );
};

export default RecentTransactionSkeleton;