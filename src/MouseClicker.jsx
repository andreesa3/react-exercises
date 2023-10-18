const MouseClicker = () => {
  const printName = (e) => {
    console.log(e.target.name);
  }

  return (
    <>
      <button name="one" onClick={printName}>Clicca</button>
    </>
  )
}

export default MouseClicker;