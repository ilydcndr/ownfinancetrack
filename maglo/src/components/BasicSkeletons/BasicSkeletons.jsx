const BasicSkeletons = ({ width = "100%", height = "200px", circle = false }) => {
  return (
    <div
      className={`skeleton shimmer ${circle ? "skeleton-circle" : ""}`}
      style={{
        width,
        height,
      }}
    />
  );
};

export default BasicSkeletons;
