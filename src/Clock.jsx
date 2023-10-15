import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState('');

  const currentTime = () => {
    return setTime(new Date().toLocaleTimeString());
  }

  useEffect(() => {
    const interval = setInterval(() => {
      currentTime()
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <>
      <h1>In <span>Italia</span> <span className="red">sono le:</span></h1>
      <h2>{time}</h2>
    </>
  )
}

export default Clock;