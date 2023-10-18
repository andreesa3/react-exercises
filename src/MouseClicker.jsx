import btnImage from './icons/black-next.svg'

const MouseClicker = () => {
  const printName = (e) => {
    {/* Avendo tolto currentTarget da questa funzione, 
    stiamo evitando che al click del pulsante venga 
    mandato in console il name dell'elemento a cui è 
    stato affidato il gestore di evento, in questo caso 
    button*/}
    console.log(e.target.name);
  }
  const printSrc = (e) => {
    console.log(e.currentTarget.src);
  }

  return (
    <>
      <button name="one" onClick={printName}>
        <img onClick={printSrc} src={btnImage} width={50} height={30} />
      </button>
    </>
  )
}

export default MouseClicker;