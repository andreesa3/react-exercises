import { useState, useEffect } from "react"

const Clock = ({}) => {
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
      <h3 className="text-2xl font-extrabold text-center">Ora corrente</h3>
      <p className="text-xl text-center">{time}</p>
    </>
  )
}

export default Clock;