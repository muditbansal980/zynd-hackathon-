import Navbar from "./components/navbar"
import Home from "./components/Home"
import CheckEligibility from "./components/checkeligibility"
import Benefits from "./components/Benefits"
import MyApplications from "./components/MyApplications"
import Profile from "./components/Profile"
import InterpretLaw from "./components/InterpretLaw"
import Footer from "./components/footer"
import SignUp from "./Signup"
import Searchbox from "./components/Searchbox"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react"

function App() {
  // async function callBackend() {
  //   const res = await fetch("http://localhost:5000/api/ai", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ prompt: "Hello from frontend!" })
  //   });

  //   const data = await res.json();
  //   console.log("AI Response:", data.ai);
  // }
  const router = createBrowserRouter([
    {
      path: "/Home",
      element: <><Navbar /><Home /><Footer /></>
    },
    {
      path: "/CheckEligibility",
      element: <> <Navbar /><CheckEligibility /><Footer /></>
    },
    {
      path: "/Benefits",
      element: <> <Navbar />< Benefits /><Footer /></>
    },
    {
      path: "/MyApplications",
      element: <><Navbar /> <MyApplications /><Footer /></>
    },
    {
      path: "/Profile",
      element: <><Navbar /><Profile /><Footer /></>
    },
    {
      path: "/InterpretLaw",
      element: <><Navbar /><InterpretLaw /><Footer /></>
    },
    {
      path: "/",
      element: <> <SignUp /></>
    }
  ])
  return (
    <div className="App bg-linear-to-r from-gray-800 via-blue-700 to-gray-900 max-[2000px]:w-[100vw] max-w-[2000px] h-[100vh] overflow-x-hidden flex flex-col jusitfy-center items-center">
      <Searchbox />
      {/* <Navbar /> */}
      <RouterProvider router={router} />
      {/* <div>
        <button onClick={callBackend} className="bg-blue-500 text-white px-4 py-2 rounded">Ask AI</button>
      </div> */}
    </div>
  )
}
export default App;