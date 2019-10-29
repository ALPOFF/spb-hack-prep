import {applyMiddleware, combineReducers, createStore} from "redux";
import mapReducer from "./map-reducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk" //import thunkmiddleware

let reducers = combineReducers({
    mapReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
