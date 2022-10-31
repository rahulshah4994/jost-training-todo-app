import { memo } from "react"
import { TodoItem } from "../types/todo"
import { TodoListItem } from "./TodoListItem"

const TodoListComponent = (props: {
  todos: TodoItem[]
  markTodoCompleted: (id: number, completed: boolean) => void
}) => {
  console.log("Rerendering TodoList")
  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {props.todos.map((todo) => (
          <TodoListItem
            key={todo.id}
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

export const TodoList = memo(TodoListComponent)
