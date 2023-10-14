const Color = ({ color }) => {
  return (
    <>
      <li>{color}</li>
    </>
  )
}

const Colors = ({ items }) => {

  return (
    <>
      <ul>
        {
          items.map(item => {
            return <Color key={item.id} color={item.name} />
          })
        }
      </ul>
    </>
  )
}

export default Colors;
