import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState('')

  const [items, setItems] = useState([])

  const handleInput = (e) => {
    setTodo(e.target.value)
  }

  const addTodo = () => {
    setItems(prevArr => {
      return [
        ...prevArr,
        todo
      ]
    })
    setTodo('');
  }

  const resetList = () => {
    setItems([]);
  }


  return (
    <>
      <input type="text" name="todo" value={todo} onChange={handleInput} />
      <button onClick={addTodo}>Add</button>
      <button onClick={resetList}>Reset</button>
      {
        items.map(item => <li>{item}</li>)
      }
    </>
  )
}

export default TodoList;