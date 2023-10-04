import Age from "./Age";

const Welcome = ({name, age}) => {
  return (
    <>
      <p>Welcome {name}</p>
      <Age age={age}/>
    </>
  )
}

export default Welcome;