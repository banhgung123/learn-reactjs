import "./styles.scss";
import PropTypes from "prop-types";
import classnames from "classnames";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoList = (idx) => {
    if (!onTodoClick) return;

    onTodoClick(idx);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed"
          })}
          onClick={() => handleTodoList(idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
