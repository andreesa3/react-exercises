const Welcome = ({name = "MARIO"}) => {
  // Se non impostiamo nulla come valore predefinito non verrà mandato nulla a schermo poiché undefined
  return (
    <>
      <h1>Welcome {name}</h1>
    </>
  )
}

export default Welcome;