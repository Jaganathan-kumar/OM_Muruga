import { CDN_URL } from "../../utils/Constant";

            

const Restaurantcard = (props) =>{
    const {resData }= props;
    const{cloudinaryImageId, name, cuisines,costForTwo, avgRating, sla, slaString, aggregatedDiscountInfoV3, header    }=resData?.info;

    return (
        <div className=" p-2  rounded-lg bg-pink-400 border-pink-900 w-56 m-6 max-h-[500px] hover:border-none hover:bg-pink-200">
        <img className="w-60 h-40 rounded-xl" src={CDN_URL+cloudinaryImageId} alt="cart-logo" />
            <h1 className="font-bold py-2 h-[60px]  text-pink-800">{name}</h1>
            <div className="hover:bg-pink-300 hover:pl-2 hover:font-bold h-52  text-pink-800">
                
                <h4 className="py-1 text-pink-800 ">{cuisines.join(", ")}</h4>
                <h4 className="py-1">{costForTwo}</h4>
             <h4 className="py-1">⭐{avgRating}Stars</h4>
             <h4 className="py-1">🏍 Delivery Time {sla.slaString}</h4>

            </div>
        </div>
    )
}


/// higher order components

/// input as a Restaurantcard => output as Restaurantcard with promoted label

export const withOfferLabel = (Restaurantcard)=>{
    return(props)=>{
        return(
            <div>
                <h4><label>{aggregatedDiscountInfoV3.header}</label></h4>
                <Restaurantcard {...props} />
                </div>

        )
    }
}

export default Restaurantcard;