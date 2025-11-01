import React from "react";

const Fulldate = () => {
  return (
    <>
      <p className="text-white text-sm font-bold sm:text-base mt-3 uppercase tracking-[0.  25em] select-none">
        {Intl.DateTimeFormat("en-Us", {
          day: "numeric",
          weekday: "short",
          month: "numeric",
          year: "numeric",
        }).format(new Date())}
      </p>
    </>
  );
};

export default Fulldate;
