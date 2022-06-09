import { GET_USER } from "./action"

const init ={
    users : [],
    user : {},
    loading : true
}

export const user_reducer = (state = init, {type,payload})=>{
   switch(type){
       case GET_USER :
       return {
             ...state,
             users : payload,
             loading: false
       }
       default :
       return state
   }
}