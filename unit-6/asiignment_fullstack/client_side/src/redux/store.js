import {legacy_createStore as createStore, combineReducers,applyMiddleware} from "redux"

import thunk from 'redux-thunk'
import { user_reducer } from "./reducer"


const root_reducer = combineReducers({
    data : user_reducer
})
export const store = createStore(root_reducer,applyMiddleware(thunk))

