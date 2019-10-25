import {combineReducers, createStore} from "redux";
import mapReducer from "./map-reducer";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    mapReducer,
    form: formReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
