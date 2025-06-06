import { useState, useEffect, useRef } from "react";

export const ResolveOnBtn = () => {
  const [message, setMessage] = useState("Waiting for button click...");
  const resolveRef = useRef({ current: null });

  useEffect(() => {
    const myPromise = new Promise((res, rej) => {
      resolveRef.current = res;
      console.log("Inside promise");
    });

    myPromise
      .then((msg) => setMessage(msg))
      .catch((err) => setMessage("Err : " + err));
  }, []);

  const handleClick = () => {
    if (resolveRef.current) {
      resolveRef.current("Button has been clicked");
    }
  };
  return (
    <>
      <p className="text-4xl text-green-500 m-10">{message}</p>
      <button onClick={handleClick}>Click to Resolve</button>
    </>
  );
};
