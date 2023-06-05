const Timer = ({ time }) => {
  return (
    <div className="timer">
      {time.toFixed(2)}
    </div>
  );
};
export default Timer;