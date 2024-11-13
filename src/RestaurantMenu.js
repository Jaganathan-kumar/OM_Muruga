import React from 'react'
import { useState, useEffect } from 'react';
import Shimmer from './Components/Shimmer';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
   

  useEffect(()=>{
    fetchMenu()

  },[])

  const fetchMenu = async()=>{
    const data = await fetch
    ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9821555&lng=80.1641598&restaurantId="+resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);

  }
  if (resInfo === null)return<Shimmer />;
  
  const {name, costForTwoMessage,avgRatingString, cuisines, sla, slaString }= resInfo?.cards[2]?.card?.card?.info;

  const{itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);


  return  (
    <div className='RestaurantMenu'>
        <h2>{name}</h2>
        <h2>{costForTwoMessage}</h2>
        <h2>{avgRatingString}</h2>
        <h2>{cuisines.join(", ")}</h2>
        <h2>{sla.slaString}</h2>
        <ol>
          {itemCards.map(item=><li key={item.card.info.id}>
            {item.card.info.name} - {"Rs: "} 
            {item.card.info.defaultPrice/100 || item.card.info.price/100} 
            </li>
          )
          }

            
        </ol>
    </div>
  )
}

export default RestaurantMenu;
