import React from 'react'
import { MENU_IMG } from '../../utils/Constant'

const ItemList = ({items}) => {
   
  return (
    <div>
        {items.map((items)=>(<div key={items.card.info.id}>
            <div className='flex border-b-2 py-2 justify-between' >
                <div>
            <div><span className='font-bold '>{items.card.info.name}</span></div>
            <div><span>₹ {items.card.info.price/100}</span> </div>
                <div><span>{items.card.info.description}</span> </div>
                </div>
           



           <div> 
           <div className='absolute'>
           <button className='p-2 bg-pink-700 rounded-2xl text-pink-200 font-bold  shadow-lg'>ADD + </button></div>
            
            <img className='w-40 p-4'  src={MENU_IMG+items.card.info.imageId
           } alt="" />
           
            </div>
            </div>

        </div>))}

    </div>
  )
}

export default ItemList