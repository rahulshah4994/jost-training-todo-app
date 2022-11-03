import { AddTodoForm } from "./AddTodoForm"
import { TodoFilter } from "./TodoFilter"
import { TodoList } from "./TodoList"
import "./TodoApp.css"
import { useCallback, useEffect } from "react"
import { TodoItem } from "../types/todo"

export const TodoApp = () => {
  const todos: TodoItem[] = []
  const showCompleted = false
  const loading = false

  useEffect(() => {}, [])

  const addTodo = useCallback((title: string) => {}, [])
  const markTodoCompleted = useCallback((id: number, completed: boolean) => {}, [])
  const toggleShowCompleted = () => {}

  return (
    <div style={{ padding: 24 }}>
      <AddTodoForm addTodo={addTodo} />
      <TodoFilter showCompleted={showCompleted} setShowCompleted={toggleShowCompleted} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todos={todos} markTodoCompleted={markTodoCompleted} />
      )}
    </div>
  )
}
