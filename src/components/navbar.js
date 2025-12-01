import Sidebar from "./sidebar";
import profile from "../assests/user.png";
import {Link} from "react-router-dom"
export default function Navbar() {
    return (
        <div className="navbar flex justify-between p-[20px] bg-[purple]">

            <div className="logo flex justify-between sm:w-[auto] w-[100vw]">
                <Sidebar />
                <h1>Logo</h1>

            </div>

            <nav className="elements hidden sm:block">
                <ul className="flex gap-[30px] text-white items-center">
                    <Link to="/" className="hover:cursor-pointer">Home</Link>
                    <Link to="/CheckEligibility" className="hover:cursor-pointer">Check Eligibility</Link>
                    <Link to="/Benefits"  className="hover:cursor-pointer">Benefits</Link>
                    <Link to="/InterpretLaw" className="hover:cursor-pointer">Interpretation of Law</Link>
                    <Link to="/MyApplications" className="hover:cursor-pointer">My Applications</Link>
                    <Link to="/Profile" className="w-[24px]"><img src={profile} alt="profile" /></Link>
                </ul>
            </nav>
        </div>
    );
}