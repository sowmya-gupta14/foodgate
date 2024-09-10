import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {
    
    const [image, setImage]= useState(false);
    const [data, setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })

    const onChangeHandler= (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data,[name]:value}))
    }

    const onSubmitHandler = async (event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)

        const response = await axios.post(`${url}/api/food/add`, formData)
        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"

            })
            setImage(false)
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)

        }


    }
  return (
    <div className='add w-[70%] ml-16 mt-12 text-zinc-500 text-base'>
        <form className='flex-col flex gap-7 ' onSubmit={onSubmitHandler}>
            <div className="add-image-upload flex-col gap-2 flex">
                <p>Upload image</p>
                <label htmlFor="image">
                    <img className='w-28' src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
            </div>

            <div className="add-product-name w-[280px]">
                <p>Product name</p>
                <input onChange={onChangeHandler} value={data.name} className='p-2 mt-1 border border-zinc-300' type="text" name='name' placeholder='Type here' />
            </div>

            <div className="add-product-desc w-[280px]">
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} className='p-2 mt-1 border border-zinc-300' name="description" rows='6' cols='50' placeholder='Write content here'></textarea>
            </div>

            <div className="add-category-price flex gap-7">
                <div className='category flex-col'>
                    <p>Product category</p>
                    <select onChange={onChangeHandler} value={data.category} name="category" className='w-32 p-2 mt-1 border border-zinc-300' >
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure veg">Pure veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>

                <div className="price flex-col">
                    <p>Product price</p>
                    <input onChange={onChangeHandler} value={data.price} className='max-w-32 p-2 mt-1 border border-zinc-300' type="Number" name='price' placeholder='$20'/>
                </div>
            </div>

            <button type='submit' className='add-button max-w-28 p-2 bg-black text-white cursor-pointer'>ADD</button>
        </form>
    </div>
  )
}

export default Add