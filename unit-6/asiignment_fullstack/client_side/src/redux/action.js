import axios from "axios"
// action type

export const GET_USER = "GET_USER"


//action creator
export const get_user = (users)=>({
    type : GET_USER,
    payload : users
})

export const load_user = (page,sort)=>{
    return function (dispatch){

        axios.get(`http://localhost:8080/products?${sort.type}=${sort.action}&page=${page}`).then((res)=>{
            dispatch(get_user(res.data))
        })
    }
}