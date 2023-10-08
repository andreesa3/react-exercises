import MultiButton from "./MultiButton";

export default function App () {
  const printName = (e) => {
    console.log(e.target.name);
  }
  return (
    <>
      <MultiButton name1="one" name2="two" name3="three"/>
    </>
  )
}