import { memo, useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"
import { postTodo } from "../services/todos.services"

const AddTodoFormComponent = () => {
  const navigate = useNavigate()
  const [addTodoInput, setAddTodoInput] = useState("")
  const queryClient = useQueryClient()
  const { mutate: postTodoMutate, isLoading: postTodoLoading } = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos")
      navigate(-1)
    },
  })

  const addTodo = (title: string) => {
    postTodoMutate({ userId: 4, title: title, completed: false })
  }

  return (
    <div className="d-flex gap-2">
      <input type="text" value={addTodoInput} onChange={(e) => setAddTodoInput(e.target.value)} />
      <button onClick={() => addTodo(addTodoInput)} disabled={postTodoLoading}>
        {postTodoLoading ? "Loading..." : "Add Todo"}
      </button>
    </div>
  )
}

export const AddTodoForm = memo(AddTodoFormComponent)
