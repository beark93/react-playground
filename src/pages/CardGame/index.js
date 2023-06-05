import { useState, useEffect, useRef, useCallback } from "react";
import Timer from './Timer'
import './CardGame.css';

const CardGame = () => {
  const [time, setTime] = useState(13);
  let timer = useRef(null);

  const onClickStart = useCallback(() => {
    if (!timer.current) {
      timer.current = setInterval(() => {
        setTime(state => state - 0.02);
      }, 20);
    }
  }, []);

  useEffect(() => {
    if (time <= 0) {
      setTime(0);
      clearInterval(timer.current);
    }
  }, [time]);

  return (
    <>
      <Timer time={time} />
      <div className="game-zone">
        <button className="game-zone__start-btn" onClick={onClickStart}>Start</button>
      </div>
    </>
  );
};
export default CardGame;