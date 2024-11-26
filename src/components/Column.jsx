const Column = ({ title, children }) => {
  return (
    <div className="h-full overflow-y-auto">
      <h2 className="text-4xl font-bold text-center my-12 mx-auto">{title}</h2>
      {children}
    </div>
  );
};

export default Column;
