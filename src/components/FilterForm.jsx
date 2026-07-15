// This component displays the filter options for the user statistics widget.
export default function FilterForm() {
  return (
    <form className="filter-form">
      <label htmlFor="dateRange">Date Range:</label>

      <select
        id="dateRange"
        className="form-select"
        defaultValue="30d"
      >
        <option value="7d">Last 7 Days</option>
        <option value="30d">Last 30 Days</option>
        <option value="90d">Last 90 Days</option>
      </select>

      <input
        type="checkbox"
        id="includeInactive"
        defaultChecked
      />

      <label htmlFor="includeInactive">
        Include inactive users
      </label>
    </form>
  )
}