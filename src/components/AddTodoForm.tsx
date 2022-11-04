import { memo, useState } from "react"

const AddTodoFormComponent = ({
  addTodo,
  loading,
}: {
  addTodo: (title: string) => void
  loading?: boolean
}) => {
  const [addTodoInput, setAddTodoInput] = useState("")

  return (
    <div className="d-flex gap-2">
      <input type="text" value={addTodoInput} onChange={(e) => setAddTodoInput(e.target.value)} />
      <button onClick={() => addTodo(addTodoInput)} disabled={loading}>
        {loading ? "Loading..." : "Add Todo"}
      </button>
    </div>
  )
}

export const AddTodoForm = memo(AddTodoFormComponent)
