import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //  setInterval(() => {
  //    setCount((prev) => prev + 1);
  //  }, 1000);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id); //clean up
  }, []);

  return (
    <div>
      <div className="display text-center text-9xl text-fuchsia-900 text-shadow-2xs">
        {count}
      </div>
      <button
        //    onClick={() => handleClick()}
        className="text-white border-2 shadow-blue-800 bg-blue-400 mt-8"
      >
        Click Me
      </button>
    </div>
  );
};

export default Counter;
