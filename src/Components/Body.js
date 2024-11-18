import { useEffect, useState } from "react";
import Restaurantcard, {withOfferLabel} from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";


const Body = () =>{

    const [ListofRestaurant, setListofRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant]= useState([]);


 
    


    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus;
    const offerLabel = withOfferLabel(Restaurantcard);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData =async ()=>{
        const  Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9821555&lng=80.1641598&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json = await Data.json();



        

//optional Chaning method (?)
        setListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }

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

    if(onlineStatus === false) return <h1>Looks like offline, please check the internet!!!!</h1>
    

    return ListofRestaurant.length === 0? (<Shimmer />) : (
        <div className="bg-gradient-to-br from-pink-200 via-pink-400 to-pink-600">
            <div className=" flex justify-between p-4">
                <div className="search-btn">
                <input type="text" name="Search" className="  w-96 border-2 p-1 border-pink-500  " placeholder="Search" 
                value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button className="bg-pink-700 text-pink-200 border-2 p-1 font-bold" onClick={()=>{
                    const filteredRestaurant = ListofRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filteredRestaurant)
                    console.log(searchText)
                }}>Search</button>
                </div>
                <button className="bg-pink-700 p-1 text-pink-200 font-bold rounded-lg" 
                onClick={()=>{
                    const filteredList = ListofRestaurant.filter(
                    (res)=>res.info.avgRating>4.5
                );
                    setFilteredRestaurant(filteredList);
                    }} >Top Rated Hotels</button>
            </div>
            
            <div className="flex flex-wrap p-4 ">
            {
                filteredRestaurant.map((restaurant)=>( 
               <Link
               key={restaurant.info.id}
               to={"/restaurant/"+restaurant.info.id}> 

               {restaurant.info.header ? (<offerLabel resData={restaurant} />) : (<Restaurantcard  resData={restaurant}/>)}
               
               </Link>))
            }
            
            </div>

        </div>
    )
}
export default Body;