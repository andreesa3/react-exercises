import Color from "./Color";

const Counter = ({items}) => {

  return (
    <>
      <ul>
        {
          items.map(item => {
            return <Color key={item.id} color={item.name}/>
          })
        }
      </ul>
    </>
  )
}

export default Counter;