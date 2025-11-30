import menu from "../assests/menu.png";
import { useState } from "react";

export default function Sidebar() {
    const Side=document.querySelector("items")
    const [display, setDisplay]=useState(false);
    return (
        <div className="sidebar sm:hidden">
            <div className="logo hover:cursor-pointer">
                <img onClick={()=> setDisplay(o=>!o)} className="w-[24px]" src={menu} alt="sidebar" />
            </div>
            <div className={`items ${display ? '' : 'hidden'}`}>
                <ul className="text-white">
                    <li className="hover:cursor-pointer">
                        <button>Home</button>
                    </li>
                    <li className="hover:cursor-pointer">
                        <button>Check Eligibility</button>
                    </li>
                    <li className="hover:cursor-pointer">
                        <button>Benefits </button>
                    </li>
                    <li className="hover:cursor-pointer">
                        <button>My Applications</button>
                    </li>
                    <li className="hover:cursor-pointer">
                        <button>Profile</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}