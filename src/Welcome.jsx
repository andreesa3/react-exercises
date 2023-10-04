import Age from "./Age";

const Welcome = ({ name, age }) => {
  return (
    <>
      <p>Welcome {name}</p>
      {age && <Age age={age} />}
    </>
  )
}

export default Welcome;