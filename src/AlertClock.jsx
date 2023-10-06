function AlertClock() {
  const currentDate = () => {
    alert(new Date().toLocaleTimeString());
  }

  return (
    <>
      <button onClick={currentDate}>Click</button>
    </>
  )
}

export default AlertClock;
