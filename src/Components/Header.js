import { useState } from "react";
import { LOGO_URL } from "../../utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";


const Header = () =>{

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus;

    return(
        <div className="flex justify-between bg-gradient-to-br from-pink-600 via-pink-400 to-pink-200  border-b-pink-400 border-b-4 ">
            <div className="nav-logo">
                <img className="w-36" src={LOGO_URL} alt="logo" />
            </div>
            <div className="">
                <ul className="flex m-12   items-center text-pink-700">
                    <li className="p-2 text-xl hover:underline"><Link to="/">Home</Link> </li>
                    <li className="p-2 text-xl hover:underline"><Link to="/cart">Cart</Link></li>
                    <li className="p-2 text-xl hover:underline"><Link to="/services">Services</Link></li>
                    <li className="p-2 text-xl hover:underline"><Link to="/about">About Us</Link></li>
                    <li className="p-2 text-xl hover:underline"><Link to="/grocery">Grocery</Link></li>
                    <button className="text-black font-bold border-solid p-2 border-2 rounded-lg border-pink-900" onClick={()=>{
                       btnName ==="Login"? setBtnName("Logout"): setBtnName("Login")}}>{btnName}</button>

                    <li className="p-2"> {onlineStatus ? "✅" : "🔴"}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;