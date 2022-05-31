import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function City() {
    const navigate = useNavigate()
    const [data,setData] = useState({
        city : "",
        population : ""
    })
  
    const handlechange = (e)=>{
   
        const new_data = {...data}
        new_data[e.target.id] = e.target.value
        setData(new_data)
    }
    //console.log(data)
    const handlesubmit = (e)=>{
       e.preventDefault()
       if(!data.city || !data.population){
           alert("please fill all the data")
       }
       else{

           axios.post("http://localhost:8080/city",{
               city : data.city,
               population : data.population
           }).then(res=>{
               console.log(res.data)
               navigate("/")
           })
       }
    }
   
  return (
    <div><h1>City</h1>
    <form action="" onSubmit={handlesubmit}>
     <input id='city'      value={data.name} onChange={(e)=>handlechange(e)}  type="text" placeholder='City Name' />
     <input id='population' value={data.population} onChange={(e)=>handlechange(e)} type="number" placeholder='population' />
    <button type="submit">button</button>
    </form>
    </div>

  )
}
