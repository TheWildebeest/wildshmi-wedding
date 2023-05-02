export const Timeline = () => {
  return (
    <div className="text-center my-6 md:my-12 lg:my-20 text-sm md:text-base lg:text-xl">
      <div
        style={{
          position: "relative",
          margin: "0 auto",
          width: "2px",
          height: "5em",
          backgroundColor: "black",
        }}
      >
        <div className="absolute right-1">-</div>
        <div className="absolute left-1">-</div>
      </div>
    </div>
  );
};
