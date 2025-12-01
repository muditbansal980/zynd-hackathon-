import Sidebar from "./sidebar";
import profile from "../assests/user.png";
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
import Home from "./Home";
export default function Navbar() {
    return (
        <div className="navbar flex justify-between p-[20px] bg-[purple]">

            <div className="logo flex justify-between sm:w-[auto] w-[100vw]">
                <Sidebar />
                <h1>Logo</h1>

            </div>

            <nav className="elements hidden sm:block">

                <ul className="flex gap-[30px] text-white items-center">
                    <NavLink className={({isActive}) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`} to="/">
                        Home
                    </NavLink>
                    {/* <Link to="/" className= "hover:cursor-pointer">Home</Link> */}
                    <NavLink to="/CheckEligibility" className={({isActive}) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`}>Check Eligibility</NavLink>
                    <NavLink to="/Benefits" className={({isActive}) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`}>Benefits</NavLink>
                    <NavLink to="/InterpretLaw" className={({isActive}) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`}>Interpretation of Law</NavLink>
                    <NavLink to="/MyApplications" className={({isActive}) => `hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`}>My Applications</NavLink>
                    <NavLink to="/Profile" className={({isActive}) => `w-[24px] hover:cursor-pointer ${isActive ? "text-blue-400 font-bold" : "text-white"}`}><img src={profile} alt="profile" /></NavLink>
                </ul>
            </nav>
        </div>
    );
}