import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { load_edit, load_update } from '../Redux/action'

export default function Edit() {
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()
    const [data,setData] = useState({
        city : "",
        population : ""
    })


    const {user} = useSelector(state => state.data)
  
    useEffect(()=>{
    dispatch(load_edit(id))
    },[])
    useEffect(()=>{
  if(user){
      setData({...user})
  }
    },[user])
  

    const handlechange = (e)=>{
     let {name,value} = e.target
     setData({...data,[name]: value})
    
    }
    //console.log(data)
    const handlesubmit = (e)=>{
        e.preventDefault()
        if(!data.city || !data.population){
            alert("please fill all the data")
        }
        else{
            dispatch(load_update(data,id))
            
                navigate("/")
            
        }
     }
   
  return (
    <div><h1>City</h1>
    <form action="" onSubmit={handlesubmit}>
     <input id='city'   name='city'   value={data.city || ""} onChange={(e)=>handlechange(e)}  type="text" placeholder='City Name' />
     <input id='population' name='population' value={data.population || ""} onChange={(e)=>handlechange(e)} type="number" placeholder='population' />
    <button type="submit">Update</button>
    </form>
    </div>

  )
}
