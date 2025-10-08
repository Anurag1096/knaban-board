interface TagsState {
  children: React.ReactNode;
  bgColor: React.CSSProperties;
}

const Tags = ({ children, bgColor }: TagsState) => {
  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
        padding: "12px",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Tags;
