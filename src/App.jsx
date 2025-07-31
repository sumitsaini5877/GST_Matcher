import AppRoutes from "./AppRoutes"
import Home from "./assets/pages/Home"
import Result from "./assets/pages/Result"
import { BrowserRouter   } from "react-router-dom"
function App() {

  return (
   <BrowserRouter>
    <AppRoutes/>
   </BrowserRouter>
  )
}

export default App
