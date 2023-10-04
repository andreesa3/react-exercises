const Age = ({age}) => {
  return (
    <>
      {
        age > 18 ? 
        (<p>You are {age} years old</p>) :
        (<p>You are very young!</p>)
      }
    </>
  )
}

export default Age