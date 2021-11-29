import React from "react";

const List = ({ todos }) => {
  const todoList = todos.map((todo, index) => {
    return <li>{todo}</li>;
  });

  return (
    <div>
      <ul>{todoList}</ul>
    </div>
  );
};

export default List;
