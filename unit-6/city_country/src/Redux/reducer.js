import { type } from "@testing-library/user-event/dist/type";
import { DELETE_USER, GET_SINGLE_EDIT, GET_USER, UPDATE_USER } from "./action";

const init_state ={
    users : [],
    user : {},
    loading : true
}
 export const user_Reducer =(state = init_state, {type,payload})=>{
      switch(type){
          case GET_USER :
              return {
                  ...state,
                  users : payload,
                  loading : false
              }
              case DELETE_USER :
                  return{
                      ...state,
                      loading:false
                  }
                  case GET_SINGLE_EDIT :
                      return{
                          ...state,
                          user : payload,
                          loading : false
                      }
                      case UPDATE_USER:
                          return {
                            ...state,
                            loading : false
                          }
          default :
          return state;
      }
}