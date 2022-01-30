import { applyMiddleware, createStore } from "redux";
import rootReducers from "./reducers/rootReducers";
import thunk from 'redux-thunk';
import { State } from '../redux';

const currSessionStorage = JSON.parse(`${sessionStorage.getItem('reduxState')}`)

const persistedState: State = sessionStorage.getItem('reduxState') ? 
currSessionStorage : {}


export const store = createStore(
    rootReducers,
    persistedState,
    applyMiddleware(thunk)
)

store.subscribe(() => {
    sessionStorage.setItem('reduxState', JSON.stringify(store.getState()))
})