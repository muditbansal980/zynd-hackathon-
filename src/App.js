import Navbar from "./components/navbar"
import HeroBanner from "./components/herobanner";
import Problem from "./components/problemsection";
import Governmentscheme from "./components/governmentschemes"
import Features from "./components/features";
import Footer from "./components/footer";
function App(){
  return(
    <div className="App">
      <Navbar/>
      <HeroBanner/>
      <Problem/>
      <Features/>
      <Governmentscheme/>
      <Footer/>
    </div>
  )
}
export default App;