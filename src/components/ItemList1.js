import React from 'react';
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList1 = ({ items }) => {
  const dispatch = useDispatch()
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    
    console.log(items)
  return (
    <div className="divide-y divide-gray-300">
      <div className='bg-slate-950'>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 flex justify-between">
          <div className="w-9/12">
            <div className="text-base font-bold">
              <span>{item.card.info.name} </span>
              <span> - ₨{item.card.info.price / 100}</span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="p-2 absolute bg-white rounded-lg mt-20 ml-7 shadow text-green-400">
              <button onClick={() => handleAddItem(item)}>Add+</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full rounded-lg" />
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ItemList1;
