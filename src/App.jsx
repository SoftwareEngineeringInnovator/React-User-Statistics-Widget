// Import the WidgetHeader component from the components folder.
import WidgetHeader from './components/WidgetHeader.jsx'
import FilterForm from './components/FilterForm.jsx'
import StatsTable from './components/StatsTable.jsx'

export default function App() {
  return (
    <div>
      <WidgetHeader />
      <FilterForm />
      <StatsTable />
    </div>
  )
}

// export default function App() {
//   return (
//     <div>Hello World!</div>
//   ) 
// }