export const TodoFilter = ({
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
