// This component displays the header section of the user statistics widget.
export default function WidgetHeader() {
  return (
    <header className="widget-header">
      <h3 className="widget-title">User Statistics</h3>

      <button
        className="btn-close"
        aria-label="Close widget"
      >
        Click me!
      </button>
    </header>
  )
}