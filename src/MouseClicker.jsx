import btnImage from './icons/black-next.svg'

export default function Counter() {
  const printName = (e) => {
    console.log(e.currentTarget.name);
  }
  const printSrc = (e) => {
    console.log(e.currentTarget.src);
  }

  return (
    <>
      {/* Abbiamo sia il name che il src perché avendo utilizzato il currentTarget 
      mandiamo in console l'elemento a cui è stato affidato il gestore dell'evento, 
      in questo caso entrambi ne hanno uno, quindi vengono mostrati tutti e due */}
      <button name="one" onClick={printName}>
        <img onClick={printSrc} src={btnImage} width={50} height={30} />
      </button>
    </>
  )
}