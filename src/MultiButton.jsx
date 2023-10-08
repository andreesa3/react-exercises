export default function MultiButton({ name1, name2, name3 }) {
  const printName = (e) => {
    console.log(e.target.name);
  }
  return (
    <>
      <button name={name1} onClick={printName}>One</button>
      <button name={name2} onClick={printName}>Two</button>
      <button name={name3} onClick={printName}>Three</button>
    </>
  )
}