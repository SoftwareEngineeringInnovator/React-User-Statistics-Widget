// This component displays the user statistics table.
export default function StatsTable() {
  return (
    <table className="stats-table" cellPadding="8">
      <thead>
        <tr>
          <th colSpan="2">Metric</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr className="highlight-row" tabIndex="0">
          <td>
            <img src="./images/users-icon.png" alt="Users" />
          </td>
          <td>Active Users</td>
          <td>1,234</td>
        </tr>
      </tbody>
    </table>
  )
}