
import { combineReducers } from 'redux'
import product from './product'
import category from './category'

export default combineReducers ({
    products: product,
    categoriesList: category 
})
