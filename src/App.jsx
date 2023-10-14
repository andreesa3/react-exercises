import Colors from "./Colors";

const App = () => {

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "black",
    "white"
  ];
  
  return (
    <>
      <Colors items={colors}/>
    </>
  )
}

export default App;
