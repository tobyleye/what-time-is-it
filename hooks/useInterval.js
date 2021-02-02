import { useEffect, useRef } from "react";

const useInterval = (cb, ms, invokeCallbackOnFirstPaint = true) => {
  const interval = useRef();
  useEffect(() => {
    if (invokeCallbackOnFirstPaint) cb();
    interval.current = setInterval(() => {
      cb();
    }, ms);
    return () => clearInterval(interval.current);
  }, []);
};

export default useInterval;
