
import { combineReducers } from 'redux'
import product from './product'
import category from './category'
import auth from './auth'
import chatreducer from './chatreducer'

export default combineReducers ({
    products: product,
    categoriesList: category,
    authentication: auth,
    chatreducer: chatreducer
})
