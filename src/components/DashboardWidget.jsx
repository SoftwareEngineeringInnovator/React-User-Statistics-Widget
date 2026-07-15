// Import the smaller components that make up the dashboard widget.
import WidgetHeader from './WidgetHeader.jsx'
import FilterForm from './FilterForm.jsx'
import StatsTable from './StatsTable.jsx'

// This component combines all sections of the user statistics widget.
export default function DashboardWidget() {
  return (
    <div className="dashboard-widget">
      <WidgetHeader />

      <div className="widget-body">
        <FilterForm />

        <hr />

        <StatsTable />
      </div>
    </div>
  )
}