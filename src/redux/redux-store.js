import {combineReducers, createStore} from "redux";
import mapReducer from "./map-reducer";

let reducers = combineReducers({
    mapReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
