import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data, showItems, setShowIndex}) => {



  const handleClick =()=>{
    setShowIndex();
  
  }
    console.log(data)
  return (
    <div>
    <div className='p-4  px-6 m-2 border-b-2 border-x-2 rounded-lg'>
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
        <span className='font-bold pb-5 text-pink-800'>{data.title} ({data.itemCards.length})</span>
        <span>⬇</span>
        </div>
             {showItems && <ItemList items={data.itemCards} />    } 
    </div>
    
    </div>
  )
}

export default RestaurantCategory