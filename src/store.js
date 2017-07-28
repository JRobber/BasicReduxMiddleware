//import createStore
import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
//import reducers
import reducer from './reducer'
//initialState [Optional]

let createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware()
)(createStore)

//export store
export default createStoreWithMiddleware(reducer)