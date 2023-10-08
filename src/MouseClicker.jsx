import btnImage from './icons/black-next.svg'

export default function Counter() {
  const printName = (e) => {
    console.log(e.currentTarget.name);
  }

  return (
    <>
      <button name="one" onClick={printName}>
        <img src={btnImage} width={50} height={30}/>
      </button>
    </>
  )
}