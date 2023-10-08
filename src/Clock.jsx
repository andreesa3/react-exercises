import { useState, useEffect } from "react";

export default function Counter() {
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
      <h2>{time}</h2>
    </>
  )
}