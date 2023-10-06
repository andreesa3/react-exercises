import App from "./App";

const AlertClock = () => {
  const currentDate = () => {
    alert(new Date().toLocaleTimeString());
  }

  return (
    <>  
      <App event={currentDate}/>
    </>
  )
}

export default AlertClock;