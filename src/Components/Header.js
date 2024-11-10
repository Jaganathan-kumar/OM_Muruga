import { LOGO_URL } from "../../utils/Constant";


const Header = () =>{
    return(
        <div className="Header">
            <div className="nav-logo">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Services</li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;