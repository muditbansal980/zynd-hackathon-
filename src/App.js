import Navbar from "./components/navbar"
import Home from "./components/Home"
import CheckEligibility from "./components/checkeligibility"
import Benefits from "./components/Benefits"
import MyApplications from "./components/MyApplications"
import Profile from "./components/Profile"
import InterpretLaw from "./components/InterpretLaw"
import Footer from "./components/footer"
import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/><Home /><Footer/></>
    },
    {
      path: "/CheckEligibility",
      element:<> <Navbar/><CheckEligibility /><Footer/></>
    },
    {
      path: "/Benefits",
      element:<> <Navbar/>< Benefits/><Footer/></>
    },
    {
      path: "/MyApplications",
      element:<><Navbar/> <MyApplications/></>
    },
    {
      path:"/Profile",
      element:<><Navbar/><Profile/><Footer/></>
    },
    {
      path:"/InterpretLaw",
      element:<><Navbar/><InterpretLaw/><Footer/></>
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