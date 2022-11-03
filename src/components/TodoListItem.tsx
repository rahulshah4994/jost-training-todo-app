import { memo } from "react"

const TodoListItemComponent = ({
  completed,
  title,
  id,
  markTodoCompleted,
}: {
  completed: boolean
  title: string
  id: number
  markTodoCompleted: (id: number, completed: boolean) => void
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          markTodoCompleted(id, e.target.checked)
        }}
      ></input>
      <label>{title}</label>
    </li>
  )
}

export const TodoListItem = memo(TodoListItemComponent)
