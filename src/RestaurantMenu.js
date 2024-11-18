import React, { useState } from 'react'
import Shimmer from './Components/Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_IMG } from '../utils/Constant';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './Components/RestaurantCategory';

const RestaurantMenu = () => {

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null )

  if (resInfo === null)return<Shimmer />;
  
  const {name, costForTwoMessage,avgRatingString, cuisines, sla, slaString }= resInfo?.cards[2]?.card?.card?.info;

  const{itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


  const  categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  

  return  (
    <div className='bg-gradient-to-br from-pink-200 via-pink-400 to-pink-600 mx-[200px]'>
      <div className=" mt-4  p-4 bg-white text text-left">
        <h2 className='font-extrabold text-5xl mr-[500px] pb-6'>{name}</h2>
        <div className=' border-spacing-28 border-2 shadow-xl	rounded-2xl shadow-gray-500	py-2'>
        <h2 className=' pl-5 py -2 text-xl font-bold'>Cost for Two{costForTwoMessage}</h2>
        <h2 className=' pl-5 py-2 text-lg font-bold'>Rating ⭐ {avgRatingString}</h2>
        <h2 className=' pl-5 py-2 text-lg text-orange-600 font-bold'> Cuisines - {cuisines.join(", ")}</h2>
        <h2 className=' pl-5 py-2 text-lg font-bold text-gray-500'>Delivery Time  🏍{sla.slaString}</h2>
        </div>
        </div>

        {categories.map((category, index)=>(<RestaurantCategory 
        key={category?.card?.card?.title} 
        data={category?.card?.card} 
        showItems={index === showIndex ?true :false}
        setShowIndex ={()=>setShowIndex(index)}
        />))}





      
    </div>
  )
}

export default RestaurantMenu;
