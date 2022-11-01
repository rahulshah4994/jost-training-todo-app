import ReactDOM from "react-dom/client"
import "./index.css"

import reportWebVitals from "./reportWebVitals"
import { TodoApp } from "./components/TodoApp"
import { createContext, useState } from "react"

export const CounterContext = createContext({ count: 0 })

const App = () => {
  const [count, setCount] = useState(10)
  return (
    <CounterContext.Provider value={{ count }}>
      <TodoApp />
    </CounterContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
