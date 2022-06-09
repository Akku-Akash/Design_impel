import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load_user } from '../redux/action'

export default function Data() {
    const dispatch = useDispatch()
    const {user} = useSelector(state =>state.data)
    useEffect(()=>{
    dispatch(load_user())
    },[])
    console.log(user)
  return (
    <div>
        <img src="" alt="" />
        <h2></h2>
    </div>
  )
}
