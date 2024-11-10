import { CDN_URL } from "../../utils/Constant";

            

const Restaurantcard = (props) =>{
    const {resData }= props;
    const{cloudinaryImageId, name, cuisines,costForTwo, avgRating, sla, slaString}=resData?.info;

    return (
        <div className="rescontainer">
        <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="cart-logo" />
            <h1>{name}</h1>
            <div className="cart-items">
                
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
             <h4>⭐{avgRating}Stars</h4>
             <h4>🏍 Delivery Time {sla.slaString}</h4>

            </div>
        </div>
    )
}

export default Restaurantcard;