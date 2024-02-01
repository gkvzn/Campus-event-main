const FullScreenLoader = () => {
  return (
    <div className="screen">
      <div className="loader">
        <p style={{ transform: "translateY(70px)" }}>loading...!</p>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default FullScreenLoader;
