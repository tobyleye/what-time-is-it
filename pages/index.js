import { useState } from "react";
import Loader from "../components/Loader";
import useInterval from "../hooks/useInterval";

export default function Index() {
  const [time, setTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCurrentTime = async () => {
    setIsLoading(true);
    const { data } = await fetch("/api/what-time-is-it").then((res) =>
      res.json()
    );
    setTime(data);
    setIsLoading(false);
  };

  // pool current time every 1 min
  useInterval(getCurrentTime, 1000 * 60);

  return (
    <article>
      <p>The time is </p>
      {isLoading ? <Loader /> : <h1>{time}</h1>}

      <style jsx>{`
        article {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: #f2f2f2;
        }
        p {
          color: #555;
        }
        h1 {
          margin-top: 0px;
        }
      `}</style>
    </article>
  );
}
