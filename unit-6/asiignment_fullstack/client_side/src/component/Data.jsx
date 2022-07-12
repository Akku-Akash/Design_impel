import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load_filer, load_user } from '../redux/action'
import "./Data.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



export default function Data() {
  const [search,setSearch] = useState([])
  const [sort, setSort] = React.useState({ type: "price", action: "asc" });
  const [page, setPage] = useState(1);

    const dispatch = useDispatch()
    
    
    
    const {users} = useSelector((state) =>state.data)
  
    useEffect(()=>{
    dispatch(load_user(page,sort))
    },[page, sort])

    const handleSort = ({ type, action }) => {
      console.log("type", type, "action", action);
      setSort({ type: type, action: action });
    };

    const handlePagination = (event, value) => {
      setPage(value);
    };
    
    
    // const indexOflastpost = page * postpage
    // const indexOffirstpost = indexOflastpost - postpage;
    //const current_post = users.data.slice(indexOffirstpost,indexOflastpost)
    //const paginate = ()=>setPage(users.totalPage)
    
   
  return (
    <div>
     
     <FormControl sx={{ m: 4, minWidth: 160 }} size="small">
          <InputLabel id="demo-select-small"> Sort By Price</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label="Sort By Price"
            value={sort.type === "price" ? sort.action : ""}
            onChange={(e) => {
              handleSort({ type: "price", action: e.target.value });
            }}
          >
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </Select>
        </FormControl>
    <div className ="main_div">
      
    {users.data && users.data.map((e)=>( 
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
   <Stack style={{
      marginLeft : "30%"
      
    }} spacing={2}>
     
      <Pagination count={users.totalPage} color="primary" onChange={handlePagination}
      
      />
   
    </Stack>
  
   </div>
   
  )
}
