import { memo } from "react"

export const TodoFilterComponent = ({
  setShowCompleted,
  showCompleted,
}: {
  showCompleted: boolean
  setShowCompleted: (showCompleted: boolean) => void
}) => {
  return (
    <div>
      <input
        type="checkbox"
        id="filter"
        checked={showCompleted}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />
      <label htmlFor="filter">Show completed</label>
    </div>
  )
}

export const TodoFilter = memo(TodoFilterComponent)
