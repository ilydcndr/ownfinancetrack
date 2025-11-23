const SkeletonItem = ({ width, height, circle = false }) => {
  return (
    <div
      className={`skeleton shimmer ${circle ? "skeleton-circle" : "skeleton-line"}`}
      style={{ width, height }}
    ></div>
  );
};

const BasicSkeletons = ({ items, direction = "row", gap = "1rem", margin, justifyContent, height }) => {
  return (
    <div
      className="skeleton-container"
      style={{
        display: "flex",
        width:"100%",
        height:height,
        flexDirection: direction,
        flexWrap: "wrap",
        gap: gap,
        margin:margin,
        justifyContent: justifyContent
      }}
    >
      {items.map((item, index) => (
        <SkeletonItem
          key={index}
          width={item.width}
          height={item.height}
          circle={item.circle}
        />
      ))}
    </div>
  );
};

export default BasicSkeletons;
