
import React from "react";

const Timer = ({ timeLeft, formatTime }) => {
  return (
    <div className=" bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold bg-slate-300 text-center text-slate-800 border border-gray-300 shadow-md py-2 px-4 mb-2">
        Time Left
      </h2>
      <div className="flex justify-center items-center h-32 bg-white shadow-md rounded-md">
        <div className="text-6xl font-semibold">
          {formatTime(timeLeft)}
        </div>
      </div>
    </div>
  );
};

export default Timer;