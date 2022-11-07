import { AddTodoForm } from "./AddTodoForm"
import { TodoFilter } from "./TodoFilter"
import { TodoList } from "./TodoList"
import "./TodoApp.css"
import { useCallback, useEffect, useState } from "react"
import { GetTodosResponse, TodoItem } from "../types/todos.types"
import { getTodos, postTodo } from "../services/todos.services"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { AxiosError } from "axios"
import { useNavigate } from "react-router-dom"

export const TodoApp = () => {
  const queryClient = useQueryClient()
  const pageSize = 10
  const [pageNumber, setPageNumber] = useState(1)
  const [showCompleted, setShowCompleted] = useState(false)
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery<GetTodosResponse, AxiosError>(["todos", pageNumber, showCompleted], () => {
    return getTodos({
      _page: pageNumber,
      _limit: pageSize,
      completed: showCompleted ? true : undefined,
    })
  })

  const markTodoCompleted = useCallback((id: number, completed: boolean) => {}, [])
  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted)
  }
  let navigate = useNavigate()
  return (
    <div style={{ padding: 24 }}>
      <button onClick={() => navigate("/todos/create")}>Create Todo</button>
      <TodoFilter showCompleted={showCompleted} setShowCompleted={toggleShowCompleted} />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <h4>{error.message}</h4>
      ) : (
        <TodoList todos={todos || []} markTodoCompleted={markTodoCompleted} />
      )}
      <div>
        <button onClick={() => setPageNumber(pageNumber - 1)}>Prev</button>
        {pageNumber}
        <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
      </div>
    </div>
  )
}
