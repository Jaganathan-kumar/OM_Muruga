import { useState } from "react";
import { LOGO_URL } from "../../utils/Constant";
import { Link } from "react-router-dom";


const Header = () =>{

    const [btnName, setBtnName] = useState("Login");

    return(
        <div className="Header">
            <div className="nav-logo">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <button className="login-btn" onClick={()=>{
                       btnName ==="Login"? setBtnName("Logout"): setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;