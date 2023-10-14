import Colors from "./Colors";

const App = () => {

  const colors = [
    { id: 0, name: "red" },
    { id: 1, name: "blue" },
    { id: 2, name: "green" },
    { id: 3, name: "yellow" },
    { id: 4, name: "purple" },
    { id: 5, name: "orange" },
    { id: 6, name: "pink" },
    { id: 7, name: "brown" },
    { id: 8, name: "black" },
    { id: 9, name: "white" }
  ];

  return (
    <>
      <Colors items={colors} />
    </>
  )
}

export default App;
