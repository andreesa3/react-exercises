const Colors = ({items}) => {

  return (
    <>
      <ul>
        {
          items.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </>
  )
}

export default Colors;
