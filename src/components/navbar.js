import profile from "../assests/user.png"
import Sidebar from "../components/sidebar"
export default function navbar() {
    return (
        <div className="navbar flex justify-between p-[20px] bg-[purple]">

            <div className="logo flex justify-between sm:w-[auto] w-[100vw]">
                <Sidebar />
                <h1>Logo</h1>

            </div>
            <div className="elements hidden sm:block">
                <ul className="flex gap-[30px] text-white">
                    <li className="hover:cursor-pointer">Homee</li>
                    <li className="hover:cursor-pointer">Check ELigibility</li>
                    <li className="hover:cursor-pointer">Benefits</li>
                    <li className="hover:cursor-pointer">My Applications</li>
                    <li className="w-[24px]"><img src={profile} alt="profile" /></li>
                </ul>
            </div>
        </div>
    )
}