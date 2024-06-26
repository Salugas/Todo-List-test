import ReactDOM from "react-dom/client"

import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { setupStore } from "store"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const store = setupStore()

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

reportWebVitals()
