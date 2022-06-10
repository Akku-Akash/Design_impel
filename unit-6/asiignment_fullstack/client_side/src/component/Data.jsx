import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load_user } from '../redux/action'
import "./Data.css"

export default function Data() {
    const dispatch = useDispatch()
    const {users} = useSelector((state) =>state.data)
    useEffect(()=>{
    dispatch(load_user())
    },[])
    console.log(users)
  return (
    <div className ="main_div">
    {users && users.map((e)=>(
      <div key={e.id} >
        <div className='frst_subdiv'>
        <img src={e.image} alt="" style={{
          width : "50%",
          cursor : "pointer"
         
        }} /></div>
      <div className='sub_div'>
        <p>{e.title}</p>
        <p>Just Rupees ₹{e.price} Only</p>
        </div>
      </div>
    ))}
       
   </div>
  )
}
