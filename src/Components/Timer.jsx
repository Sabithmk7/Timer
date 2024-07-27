import React, { useEffect, useRef, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isTime, setIsTime] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isTime) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 100);
    }
    return () => clearInterval(intervalRef.current);
  }, [isTime]);

  function handleStart() {
    setIsTime(true);
  }

  function handleStop() {
    setIsTime(false);
  }

  function handleRestart() {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsTime(true)
    if (isTime) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 100);
    }
  }

  return (
    <div className="bg-black h-screen text-black text-center flex items-center justify-center ">
      <div className="w-[40%] h-[60%] bg-slate-400 flex items-center flex-col justify-center rounded-lg">
        <h1 className="font-bold text-3xl">Timer:{time}</h1>
        <div className="flex gap-4 mt-12">
          <button
            className="border-2 border-white p-4 rounded-lg hover:bg-slate-500"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="border-2 border-white p-4 rounded-lg hover:bg-slate-500"
            onClick={handleStop}
          >
            Stop
          </button>
          <button
            className="border-2 border-white p-4 rounded-lg hover:bg-slate-500"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
