
import { combineReducers } from 'redux'
import product from './product'
import category from './category'
import auth from './auth'

export default combineReducers ({
    products: product,
    categoriesList: category,
    authentication: auth
})
