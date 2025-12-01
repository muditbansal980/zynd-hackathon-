import Navbar from "./components/navbar"
import Home from "./components/Home"
import CheckEligibility from "./components/checkeligibility"
import Benefits from "./components/Benefits"
import MyApplications from "./components/MyApplications"
import Profile from "./components/Profile"
import InterpretLaw from "./components/InterpretLaw"
import {Link} from "react-router-dom"
import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/><Home /></>
    },
    {
      path: "/CheckEligibility",
      element:<> <Navbar/><CheckEligibility /></>
    },
    {
      path: "/Benefits",
      element:<> <Navbar/>< Benefits/></>
    },
    {
      path: "/MyApplications",
      element:<><Navbar/> <MyApplications/></>
    },
    {
      path:"/Profile",
      element:<><Navbar/><Profile/></>
    },
    {
      path:"/InterpretLaw",
      element:<><Navbar/><InterpretLaw/></>
    }

  ])
  return (
    <div className="App">
      {/* <Navbar /> */}
      <RouterProvider router={router}/>
    </div>
  )
}
export default App;