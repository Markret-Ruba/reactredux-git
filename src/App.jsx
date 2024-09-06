import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Components/Home"
import { Provider } from "react-redux"
import Store from "./Components/Store"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Checkout from "./Components/Checkout"
import "./App.css"

function App() {
  return (
    <Provider store={Store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
    </Routes>
    </BrowserRouter>
      </Provider>
  )
}

export default App
