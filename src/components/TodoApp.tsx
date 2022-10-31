import { AddTodoForm } from "./AddTodoForm"
import { TodoFilter } from "./TodoFilter"
import { TodoList } from "./TodoList"
import "./TodoApp.css"
import { useCallback, useEffect, useMemo, useState } from "react"
import { TodoItem } from "../types/todo"

export const TodoApp = () => {
  console.log("Begin")
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [showCompleted, setShowCompleted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((response) => {
        setTodos(response.slice(0, 10))
        setLoading(false)
      })
  }, [])

  const addTodo = useCallback(
    (title: string) => {
      setTodos([...todos, { id: todos.length + 1, title: title, completed: false }])
    },
    [todos]
  )

  const displayedTodos = useMemo(() => {
    return showCompleted
      ? todos.filter((todo) => {
          return todo.completed === true
        })
      : todos
  }, [todos, showCompleted])

  const markTodoCompleted = useCallback(
    (id: number, completed: boolean) => {
      setTodos(
        todos.map((todo) => {
          if (id === todo.id) {
            return { ...todo, completed: completed }
          } else {
            return todo
          }
        })
      )
    },
    [todos]
  )

  return (
    <div style={{ padding: 24 }}>
      <button onClick={increment}>{count}</button>
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
