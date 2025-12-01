import menu from "../assests/menu.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {  
    const [display, setDisplay]=useState(false);
    return (
        <div className="sidebar sm:hidden">
            <div className="logo hover:cursor-pointer">
                <img onClick={()=> setDisplay(o=>!o)} className="w-[24px]" src={menu} alt="sidebar" />
            </div>
            <div className={`items ${display ? '' : 'hidden'}`}>
                <ul className="text-white">
                    <li className="hover:cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:cursor-pointer">
                        <Link to="/CheckEligibility">Check Eligibility</Link>
                    </li>
                    <li className="hover:cursor-pointer">
                        <Link to="/Benefits">Benefits</Link>
                    </li>
                    <li className="hover:cursor-pointer">
                        <Link to="/InterpretLaw">Interpretation of Law</Link>
                    </li>
                    <li className="hover:cursor-pointer">
                        <Link to="/MyApplications">My Applications</Link>
                    </li>
                    <li className="hover:cursor-pointer">
                        <Link to="/Profile">Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}