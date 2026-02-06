import { useEffect, useState } from "react";

function UseEffectClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h3>{time}</h3>;
}

export default UseEffectClock;
