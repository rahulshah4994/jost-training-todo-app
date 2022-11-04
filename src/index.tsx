import ReactDOM from "react-dom/client"
import "./index.css"

import reportWebVitals from "./reportWebVitals"
import { TodoApp } from "./components/TodoApp"
import { QueryClient, QueryClientProvider } from "react-query"

// Create a client
const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 3000 } } })

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <TodoApp />
    </QueryClientProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
