import Button from "./Button.jsx";
import Fulldate from "./Fulldate.jsx";
import ThreeDots from "./ThreeDots.jsx";
import { Card, CardContent } from "@mui/material";
import { useRef } from "react";
import { useEffect } from "react";

const TimerDIsplay = ({ toggleText, timer, time, Reset }) => {
  const refName = useRef(null);
  useEffect(() => {
    if (refName.current) {
      refName.current.focus();
    }
  }, []);

  return (
    <>
      <CardContent className="text-center py-10 px-6">
        <h1 className="text-6xl break-normal sm:text-4xl md:text-5xl font-extrabold  text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 select-none drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
          {time}
        </h1>
        <Fulldate />
        <ThreeDots />
        <div className="flex m-6  justify-evenly align-middle items-center p-2 text-white">
          <Button ref={refName} click={() => timer()}>
            {toggleText ? "Pause" : "Resume"}
          </Button>
          <Button click={() => Reset()}>Reset</Button>
        </div>
      </CardContent>
    </>
  );
};

export default TimerDIsplay;
