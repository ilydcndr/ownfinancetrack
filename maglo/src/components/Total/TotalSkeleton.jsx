import { BasicSkeletons } from '../index';

const TotalSkeleton = () => {

    return (
        <BasicSkeletons
            items={[
                { width: "30%", height: "150px" },
                { width: "30%", height: "150px" },
                { width: "30%", height: "150px" }
            ]}
            direction="row"
            margin="20px 0"
            justifyContent="space-between"
        />
    );
};
export default TotalSkeleton;