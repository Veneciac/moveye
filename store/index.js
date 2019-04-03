import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//REDUCERS
import movie from './reducers/movie'

const store = createStore(
    combineReducers({ movie }), 
    applyMiddleware(thunk)
)

export default store