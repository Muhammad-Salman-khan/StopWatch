import { useState, useRef } from "react";
import TimerDIsplay from "./components/TimerDIsplay.jsx";
import { useEffect } from "react";

const App = () => {
  const refName = useRef(null);
  const [Timer, setTimer] = useState(localStorage.getItem("time") || "");
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem("time", Timer);
  }, [Timer]);
  const ToggleTimer = () => {
    if (isRunning) {
      clearInterval(refName.current);
      refName.current = null;
    } else {
      refName.current = setInterval(() => {
        setTimer((e) =>
          Intl.DateTimeFormat("en-Us", {
            hour: "2-digit",
            minute: "2-digit",
            second: "numeric",
          }).format(new Date())
        );
      }, 1000);
    }
    setRunning(!isRunning);
  };
  const Reset = () => {
    clearInterval(refName.current);
    refName.current = null;
    setRunning(false);
    setTimer("");
    localStorage.clear("time");
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black">
        <div
          className="w-[90%] sm:w-80 md:w-96 bg-transparent backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)]"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TimerDIsplay
            timer={ToggleTimer}
            time={Timer}
            toggleText={isRunning}
            Reset={Reset}
          />
        </div>
      </div>
    </>
  );
};

export default App;
