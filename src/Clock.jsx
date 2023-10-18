import { useContext } from "react";
import { useState, useEffect } from "react"
import LanguageContext from "./LanguageContext";

const Clock = ({}) => {
  const [time, setTime] = useState('');

  const language = useContext(LanguageContext)

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
      <h3 className="text-2xl font-extrabold text-center">{language === "en" ? 'Current time' : language === 'it' ? 'Ora Corrente' : 'Aktuelle Uhrzeit'}</h3>
      <p className="text-xl text-center">{time}</p>
    </>
  )
}

export default Clock;