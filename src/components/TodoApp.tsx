import { AddTodoForm } from "./AddTodoForm"
import { TodoFilter } from "./TodoFilter"
import { TodoList } from "./TodoList"
import "./TodoApp.css"
import { useCallback, useContext, useEffect, useMemo, useReducer } from "react"
import { TodoItem } from "../types/todo"
import { CounterContext } from ".."
import { stateReducer } from "../reducers/todoApp.reducer"
import { ACTIONS } from "../actions/todoApp.actions"
import axios from "axios"

export const TodoApp = () => {
  const [state, dispatch] = useReducer(stateReducer, {
    todos: [],
    showCompleted: false,
    loading: true,
  })
  const count = useContext(CounterContext)

  const todos = state.todos
  const showCompleted = state.showCompleted
  const toggleShowCompleted = () => dispatch({ type: ACTIONS.TOGGLE_SHOW_COMPLETED })

  const loading = state.loading
  const setLoading = (value: boolean) => dispatch({ type: ACTIONS.SET_LOADING, payload: value })

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((response) => {
        setTimeout(() => {
          dispatch({ type: ACTIONS.SET_TODOS, payload: response.slice(0, 10) })
          setLoading(false)
        }, 1000)
      })
  }, [])

  const addTodo = useCallback((title: string) => {
    dispatch({ type: ACTIONS.ADD_TODO, payload: title })
  }, [])

  const displayedTodos = useMemo(() => {
    return showCompleted
      ? todos.filter((todo: TodoItem) => {
          return todo.completed === true
        })
      : todos
  }, [todos, showCompleted])

  const markTodoCompleted = useCallback((id: number, completed: boolean) => {
    dispatch({ type: ACTIONS.MARK_TODO_COMPLETED, payload: id })
  }, [])

  return (
    <div style={{ padding: 24 }}>
      {count.count}
      <AddTodoForm addTodo={addTodo} />
      <TodoFilter showCompleted={showCompleted} setShowCompleted={toggleShowCompleted} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todos={displayedTodos} markTodoCompleted={markTodoCompleted} />
      )}
    </div>
  )
}
