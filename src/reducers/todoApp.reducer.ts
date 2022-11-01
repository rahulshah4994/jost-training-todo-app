import { ACTIONS } from "../actions/todoApp.actions"
import { TodoItem } from "../types/todo"

interface Action {
  type: string
  payload?: any
}
interface ComponentState {
  todos: TodoItem[]
  showCompleted: boolean
  loading: boolean
}

export const stateReducer = (state: ComponentState, action: Action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_SHOW_COMPLETED:
      return { ...state, showCompleted: !state.showCompleted }
    case ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload }
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: state.todos.length + 1, title: action.payload, completed: false },
        ],
      }

    case ACTIONS.MARK_TODO_COMPLETED:
      const id = action.payload
      const updatedTodos: TodoItem[] = state.todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
      return { ...state, todos: updatedTodos }

    case ACTIONS.SET_TODOS:
      return { ...state, todos: action.payload }
    default:
      return state
  }
}
