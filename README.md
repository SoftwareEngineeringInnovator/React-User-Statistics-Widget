# React User Statistics Widget

A beginner-friendly React project created with **Vite** to practice converting regular HTML into reusable React components.

This project focuses on learning the basic structure of a React application, working with JSX, importing and exporting components, organizing components into separate files, importing CSS, and displaying local image assets.

---

## Project Purpose

The purpose of this project is to practice the fundamentals of React by converting a user statistics dashboard from regular HTML into separate React components.

The project started with a basic Vite React application. The default boilerplate code was removed and replaced with a simple component-based structure.

The original HTML was divided into smaller reusable React components so each section of the user interface has its own responsibility.

---

## Technologies Used

- React
- JavaScript
- JSX
- Vite
- HTML
- CSS
- Oxlint
- npm
- Git
- GitHub
- Visual Studio Code

---

## React Concepts Practiced

This project helped practice several important beginner React concepts:

- Creating React components
- Using JSX
- Converting regular HTML attributes into JSX syntax
- Using `export default`
- Importing components into other components
- Rendering custom components
- Organizing files inside a `components` folder
- Combining smaller components into a larger parent component
- Importing CSS into a React application
- Importing local images from the `src/assets` folder
- Using JavaScript variables inside JSX with curly braces
- Running a React development server with Vite
- Using Git and GitHub to track project progress

---

## Project Setup

The project was created with Vite using:

```bash
npm create vite@latest
```

The following options were selected during setup:

```text
Project name: my-react-app
Framework: React
Variant: JavaScript
Linter: Oxlint
Install with npm and start: Yes
```

After installation, the Vite development server can be started with:

```bash
npm run dev
```

Vite will display a local development URL in the terminal, usually similar to:

```text
http://localhost:5173/
```

Always use the exact `Local:` URL displayed in the terminal.

To stop the Vite development server:

```text
Ctrl + C
```

---

## Project Structure

The project uses a component-based structure:

```text
src/
├── assets/
│   └── users-icon.png
│
├── components/
│   ├── DashboardWidget.jsx
│   ├── FilterForm.jsx
│   ├── StatsTable.jsx
│   └── WidgetHeader.jsx
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

---

## Component Flow

The React application follows this component hierarchy:

```text
main.jsx
    ↓
App.jsx
    ↓
DashboardWidget.jsx
    ↓
├── WidgetHeader.jsx
├── FilterForm.jsx
└── StatsTable.jsx
```

### `main.jsx`

`main.jsx` is the entry point of the React application. It finds the `root` element in `index.html` and renders the main `App` component.

### `App.jsx`

`App.jsx` acts as the main application component. It imports and renders the complete `DashboardWidget` component.

Example:

```jsx
// Import the CSS styles for the application.
import './App.css'

// Import the complete DashboardWidget component.
import DashboardWidget from './components/DashboardWidget.jsx'

export default function App() {
  return (
    <DashboardWidget />
  )
}
```

### `DashboardWidget.jsx`

This component acts as the parent component for the complete user statistics widget.

It combines:

- `WidgetHeader`
- `FilterForm`
- `StatsTable`

### `WidgetHeader.jsx`

This component displays:

- The **User Statistics** title
- The close button

### `FilterForm.jsx`

This component displays:

- The date range label
- The date range dropdown
- The inactive-user checkbox
- The checkbox label

### `StatsTable.jsx`

This component displays:

- The table headings
- The user image
- The **Active Users** metric
- The value **1,234**

---

## Important HTML to JSX Changes

Regular HTML cannot always be copied directly into React without changes.

Some of the important conversions used in this project include:

| HTML | React JSX |
|---|---|
| `class` | `className` |
| `for` | `htmlFor` |
| `onclick` | `onClick` |
| `onsubmit` | `onSubmit` |
| `onchange` | `onChange` |
| `colspan` | `colSpan` |
| `tabindex` | `tabIndex` |
| `cellpadding` | `cellPadding` |
| `selected` | `defaultValue` on the `<select>` |
| `checked` | `defaultChecked` |
| `<img>` | `<img />` |
| `<input>` | `<input />` |
| `<hr>` | `<hr />` |

For this beginner version of the project, event placeholders such as `onclick="null"`, `onsubmit="null"`, and `onchange="null"` were removed because React event handling functions have not yet been added.

---

## Importing and Exporting Components

Each React component is exported so it can be used in another file.

Example:

```jsx
export default function WidgetHeader() {
  return (
    <header className="widget-header">
      <h3 className="widget-title">User Statistics</h3>
    </header>
  )
}
```

Another file can then import it:

```jsx
import WidgetHeader from './WidgetHeader.jsx'
```

This allows larger interfaces to be built from smaller reusable components.

---

## Image Import

The user image is stored inside:

```text
../../images/users-icon.png
```

Because `StatsTable.jsx` is inside the `src/components` folder, the image is imported using:

```jsx
import usersIcon from '../../images/users-icon.png'
```

The imported image is then displayed with:

```jsx
<img src={usersIcon} alt="Users" />
```

The curly braces are important because `usersIcon` is a JavaScript variable created by the import.

---

## CSS Import

The application CSS file is imported inside `App.jsx`:

```jsx
import './App.css'
```

The image can be resized with CSS such as:

```css
/* Controls the size of the user icon inside the statistics table. */
.stats-table img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}
```

---

## Common Error Encountered

One error encountered during development was:

```text
A module cannot have multiple default exports.
```

This happened because `App.jsx` temporarily contained two separate declarations like:

```jsx
export default function App() {
  // ...
}
```

A JavaScript module can only have one default export.

The issue was corrected by keeping only one `App` component in the file.

A useful troubleshooting approach is to first read:

1. The main error message
2. The file name
3. The line numbers shown by Vite

---

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed by Vite in the terminal.

---

## Future Improvements

Future React practice can expand this project by adding:

- `onClick` event handling for the close button
- `onChange` event handling for the date range dropdown
- `onSubmit` handling for the form
- `useState` for interactive values
- Props for reusable component data
- Conditional rendering
- More statistics rows
- Additional CSS styling
- Responsive design

---

## Author

Fredy Chilito  
Software Engineering Student  
Created as part of the Per Scholas Software Engineering Program.  
Project: React User Statistics Widget