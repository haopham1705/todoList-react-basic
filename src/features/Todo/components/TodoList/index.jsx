import React from "react";
import PropTypes from "prop-types";

// props type --> array
TodoList.propTypes = {
  TodoList: PropTypes.array,
};
// default value --> []
TodoList.defaultProps = {
  TodoList: [],
};
function TodoList({ todoList }) {
  //   const {} = props;
  return (
    <ul>
      {todoList.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
    </ul>  
  );
}

export default TodoList;
