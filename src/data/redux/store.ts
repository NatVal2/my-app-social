import {combineReducers, legacy_createStore} from "redux";
import {profilePageReducer} from "../reducers/profilPageReducer";
import {dialogsReducer} from "../reducers/dialogsreducer";
import {userReducer} from "../reducers/userReducer";

export const rootReducer = combineReducers({
    profileReducer : profilePageReducer,
    dialogsReducer: dialogsReducer,
    userReducer: userReducer
})

export const reduxStore = legacy_createStore(rootReducer)
export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch