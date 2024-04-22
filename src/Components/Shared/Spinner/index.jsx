const Spinners = ({type}) => {
  return (
    <div>
      <div className={`spinner-border ${type === "dark" ? "text-dark" : "text-light"}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinners;
