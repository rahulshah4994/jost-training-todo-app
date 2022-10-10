import { AddTodoForm } from "./AddTodoForm"
import { TodoFilter } from "./TodoFilter"
import { TodoList } from "./TodoList"
import "./TodoApp.css"
import { useEffect, useState } from "react"
import { TodoItem } from "../types/todo"

export const TodoApp = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [showCompleted, setShowCompleted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((response) => {
        setTodos(response.slice(0, 10))
        setLoading(false)
      })
  }, [])

  const addTodo = (title: string) => {
    setTodos([...todos, { id: todos.length + 1, title: title, completed: false }])
  }

  const displayedTodos = showCompleted
    ? todos.filter((todo) => {
        return todo.completed === true
      })
    : todos

  const markTodoCompleted = (id: number, completed: boolean) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, completed: completed }
        } else {
          return todo
        }
      })
    )
  }

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      <TodoFilter showCompleted={showCompleted} setShowCompleted={setShowCompleted} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todos={displayedTodos} markTodoCompleted={markTodoCompleted} />
      )}
    </div>
  )
}
