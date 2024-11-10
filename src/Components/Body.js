import { useState } from "react";
import Restaurantcard from "./Restaurantcard";
import resList from "../../utils/Mockdata";





const Body = () =>{

    const [ListofRestaurant, setListofRestaurant] = useState(resList);

    // let ListofRestaurantjs =[
    //     {
    //         "info": {
    //         "id": "659725",
    //         "name": "King Murugan",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/60497022-434e-4d21-bc0e-813fea770ae5_659725.JPG",
    //         "costForTwo": "₹350 for two",
    //         "cuisines": [
    //           "Burgers",
    //           "American"
    //         ],
    //         "avgRating": 3.3,
    //         "slaString": "20-25 mins"
    //     }
    //     },
    //     {
    //         "info": {
    //         "id": "659726",
    //         "name": "Om Muruga",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/60497022-434e-4d21-bc0e-813fea770ae5_659725.JPG",
    //         "costForTwo": "₹350 for two",
    //         "cuisines": [
    //           "Burgers",
    //           "American"
    //         ],
    //         "avgRating": 4.3,
    //         "slaString": "20-25 mins"
    //     }
    //     },
    //     {
    //         "info": {
    //         "id": "659727",
    //         "name": "Muruga",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/60497022-434e-4d21-bc0e-813fea770ae5_659725.JPG",
    //         "costForTwo": "₹350 for two",
    //         "cuisines": [
    //           "Burgers",
    //           "American"
    //         ],
    //         "avgRating": 4.5,
    //         "slaString": "20-25 mins"
    //     }
    //     }
    
    // ]
    

    return(
        <div className="body">
            <div className="search">
                <input type="text" name="Search" id="search" placeholder="Search" />
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList = ListofRestaurant.filter(
                    (res)=>res.info.avgRating>4
                );
                    setListofRestaurant(filteredList);
                    }} >Top Rated Hotels</button>
            </div>
            <div className="card">
            {
                ListofRestaurant.map((restaurant)=>(
                <Restaurantcard key={restaurant.info.id} resData={restaurant}/>))
            }
            
            </div>

        </div>
    )
}
export default Body;