import {configureStore} from '@reduxjs/toolkit'
import postReducer from './reducers/postReducer'

const reducer = {
    postReducer

}

const store = configureStore({reducer})

export default store