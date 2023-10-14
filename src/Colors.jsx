const Counter = ({items}) => {

  return (
    <>
      <ul>
        {
          items.map(item => {
            return <li>{item}</li>
          })
        }
      </ul>
    </>
  )
}

export default Counter;