import { APPLE_DOWN_LOGO, LOGO_URL, PLAY_STORE_URL } from "../../utils/Constant"

const Footer = () =>{
    return(
        <div className="flex justify-between bg-black font-semibold text-gray-400 p-6">
            <div className="first-col">
                <ul>
                    <li>Who we are</li>
                    <li>Blogs</li>
                    <li>Work with us</li>
                    <li>Investor Relations</li>
                    <li>Report Fraud</li>
                </ul>
            </div>
            <div className="second-col">
                <ul>
                    <li>Partner with us</li>
                    <li>Apps for you</li>
                    <li>Teams & Policy</li>
                </ul>
            </div>
            <div className="second-col">
                <ul>
                    <li>Contact US</li>
                    <li>Help & Support</li>
                    <li>Ride with us</li>
                </ul>
            </div>
            <div className="third-col">
               <img className="w-24" src={LOGO_URL} alt="Logo" />
               <h4>© 2024 OM Limited</h4>
               <img className="w-24" src={APPLE_DOWN_LOGO} alt="LOGO" />
               <img className="w-24 pt-2" src={PLAY_STORE_URL} alt="LOGO" />
            </div>
        </div>
        
    )
}

export default Footer;