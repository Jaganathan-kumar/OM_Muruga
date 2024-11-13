import { useEffect, useState } from "react";
import Restaurantcard from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () =>{

    const [ListofRestaurant, setListofRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant]= useState([]);
    


    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData =async ()=>{
        const  Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9821555&lng=80.1641598&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json = await Data.json();

        console.log(json);

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
    

    return ListofRestaurant.length === 0? (<Shimmer />) : (
        <div className="body">
            <div className="search">
                <div className="search-btn">
                <input type="text" name="Search" id="search" placeholder="Search" 
                value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value);

                }}/>
                <button className="search-logo" onClick={()=>{

                    const filteredRestaurant = ListofRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filteredRestaurant)




                    console.log(searchText)
                }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList = ListofRestaurant.filter(
                    (res)=>res.info.avgRating>4.5
                );
                    setFilteredRestaurant(filteredList);
                    }} >Top Rated Hotels</button>
            </div>
            
            <div className="card">
            {
                filteredRestaurant.map((restaurant)=>(
               <Link
               key={restaurant.info.id}
               to={"/restaurant/"+restaurant.info.id}> 
               <Restaurantcard  resData={restaurant}/>
               </Link>))
            }
            
            </div>

        </div>
    )
}
export default Body;