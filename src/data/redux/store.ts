import {combineReducers, createStore, legacy_createStore} from "redux";
import {profilePageReducer} from "../reducers/profilPageReducer";

const rootReducer = combineReducers({
    profileReducer : profilePageReducer
})

export const store = legacy_createStore(rootReducer)
export type RootSate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch