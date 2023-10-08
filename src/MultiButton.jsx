import btnImage from './icons/black-next.svg'

export default function Counter() {
  const printName = (e) => {
    console.log(e.target.name);
  }
  return (
    <>
      <button name="one" onClick={printName}>Cliccami</button>
      <button name="two" onClick={printName}>Cliccami</button>
      <button name="three" onClick={printName}>Cliccami</button>
    </>
  )
}