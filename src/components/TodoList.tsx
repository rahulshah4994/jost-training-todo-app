import { memo, useEffect, useMemo, useState } from "react"
import { TodoItem } from "../types/todos.types"
import { TodoListItem } from "./TodoListItem"

const TodoListComponent = (props: {
  todos: TodoItem[]
  markTodoCompleted: (id: number, completed: boolean) => void
}) => {
  const [search, setSearch] = useState("")
  const [sortDirection, setSortDirection] = useState("0")
  const filteredTodos = useMemo(
    () => props.todos.filter((todo) => todo.title.includes(search)),
    [props.todos, search]
  )

  const sortedTodos = useMemo(
    () =>
      filteredTodos.sort((a, b) =>
        sortDirection === "0" ? (a.title > b.title ? 1 : -1) : a.title > b.title ? -1 : 1
      ),
    [filteredTodos, sortDirection]
  )

  return (
    <div>
      <h3>Todo List</h3>
      <input
        type="text"
        value={search}
        placeholder="Search todos..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <label>Sort</label>
      <select onChange={(e) => setSortDirection(e.target.value)}>
        <option value={"0"}>A-Z</option>
        <option value={"1"}>Z-A</option>
      </select>
      <ul>
        {sortedTodos.map((todo) => (
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
