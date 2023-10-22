import FilteredList from "./FilteredList";

const App = () => {
  const people = [
    { id: 1, name: "John", age: 19 },
    { id: 2, name: "Alice", age: 30 },
    { id: 3, name: "Bob", age: 22 },
    { id: 4, name: "Mario", age: 18 },
    { id: 5, name: "Marco", age: 17 },
    { id: 6, name: "Luca", age: 16 },
  ];
  
  return (
    <>
      <FilteredList list={people} />
    </>
  )
}

export default App;
