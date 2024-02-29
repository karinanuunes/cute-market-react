import { useEffect, useState } from "react";
import "./index.css";

const Watch = () => {
  const [seconds, setSeconds] = useState(480);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="watch">
      <p className="tiktok">
        {String(minutes).padStart(2, "0")}M:
        {String(remainingSeconds).padStart(2, "0")}S
      </p>
    </div>
  );
};

export default Watch;
