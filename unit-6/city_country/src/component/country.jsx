import axios from 'axios'
import React, { useState } from 'react'

export default function Country() {
  const [cont,setCont] = useState("")
  return (
    <div><h1>Country</h1>
    <input onChange={(e)=>setCont(e.target.value)} type="text"  />
    <button onClick={(e)=>{
      axios.post("http://localhost:8080/country",{
        country : cont
      }).then((res)=>{
        console.log(res.data)
      })
    }}>submit</button>
    </div>
    
  )
}
