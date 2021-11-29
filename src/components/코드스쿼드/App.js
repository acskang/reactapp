import { useState, useEffect } from "react";
import List from "./List";
const App = () => {
  const [todos, setTodos] = useState(["js공부"]);
  const [newTodo, setNewTodo] = useState();
  function changeInputData(e) {
    setNewTodo(e.target.value);
  }
  function addTodo(e) {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    console.log(todos);
  }
  useEffect(() => {
    console.log("새로운 할일이 저장되었습니다.");
  }, [todos]);
  return (
    <div>
      <h1>I am 코드스쿼드</h1>
      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>할일추가</button>
      </form>
      <List todos={todos} />
    </div>
  );
};

export default App;
