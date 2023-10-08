export default function Counter() {
  const printName = (e) => {
    console.log(e.currentTarget.name);
  }

  return (
    <>
      <button name="one" onClick={printName}>
        <img src="" width={50} height={30}/>
      </button>
    </>
  )
}