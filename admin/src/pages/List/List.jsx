import React, { useEffect, useState } from 'react'
import axios from "axios"
import {toast} from "react-toastify"
import '../List/List.css'

const List = ({url}) => {
    
    const [list, setList] = useState([]);

    const fetchList = async ()=>{
        const response = await axios.get(`${url}/api/food/list`);
        if(response.data.success){
            setList(response.data.data);
        }else{
            toast.error("Error");
            
        }
    }

    const removeFood= async(foodId) => {
        const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
        await fetchList();
        if(response.data.success){
            toast.success(response.data.message)
        }else{
            toast.error("Error")
        }

    }

    useEffect(()=>{
        fetchList();
    },[])


  return (
    <div className='list add w-[70%] ml-16 mt-12 text-base flex-col flex gap-2'>
        <p>All Foods List</p>
        <div className="list-table col-span-5">
            <div className="table-format title grid grid-cols-5 items-center py-3 px-4 border border-zinc-300 text-sm bg-zinc-400">
                <b className=''>Image</b>
                <b>Name</b>
                <b>Category</b>
                <b>Price</b>
                <b>Action</b>
            </div>

            {list.map((item,index)=>{
                return(
                    <div key={index} className='table-format grid grid-cols-5 items-center gap-2 py-3 px-4 border border-zinc-300 text-sm'>
                        <img className='w-12' src={`${url}/images/`+item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>${item.price}</p>
                        <p onClick={()=>removeFood(item._id)} className='cursor-pointer'>x</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default List