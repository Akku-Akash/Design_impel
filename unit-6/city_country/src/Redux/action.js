import axios from "axios"

//action type
export const GET_USER = "GET_USER"
export const DELETE_USER = "DELETE_USER"
export const GET_SINGLE_EDIT = "GET_SINGLE_EDIT"
export const UPDATE_USER = "UPDATE_USER"
// action creator
export const get_user = (users)=>({
     type : GET_USER,
     payload : users
})
export const delete_user = ()=>({
    type : DELETE_USER,
    
})
export const edit_user = (user)=>({
    type : GET_SINGLE_EDIT,
    payload : user
    
})
export const update_user = (users)=>({
    type : UPDATE_USER,
    payload : users
})

export const load_user = ()=>{
    return function (dispatch){
        axios.get(" http://localhost:8080/city").then((res)=>{
            dispatch(get_user(res.data))
        })
    }
}
export const load_delete = (id)=>{
    return function (dispatch){
        axios.delete(`http://localhost:8080/city/${id}`).then((res)=>{
            dispatch(delete_user(res.data))
             dispatch(load_user(res.data))
        })
    }
}
export const load_edit = (id)=>{
    return function (dispatch){
        axios.get(`http://localhost:8080/city/${id}`).then((res)=>{
            dispatch(edit_user(res.data))
            
        })
    }
}
export const load_update = (user,id)=>{
    return function (dispatch){
        axios.put(`http://localhost:8080/city/${id}`,user).then((res)=>{
            dispatch(update_user())
            
        })
    }
}