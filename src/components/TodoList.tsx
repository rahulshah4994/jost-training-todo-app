import { TodoItem } from "../types/todo"
import { TodoListItem } from "./TodoListItem"

export const TodoList = (props: {
  todos: TodoItem[]
  markTodoCompleted: (id: number, completed: boolean) => void
}) => {
  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {props.todos.map((todo) => (
          <TodoListItem
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            markTodoCompleted={props.markTodoCompleted}
          />
        ))}
      </ul>
    </div>
  )
}
