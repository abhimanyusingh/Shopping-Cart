import { combineReducers } from 'redux'
import { 
  RECEIVE_PRODUCTS, 
  ADD_TO_CART, 
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY
} 
  from '../constants/ActionTypes'

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        quantityRemaining: state.quantityRemaining - 1,
        quantity: 1,
        addToCart: true
      }

      case REMOVE_FROM_CART: 
      return {
        ...state,
        quantityRemaining: state.quantityRemaining + 1,
        quantity: 0,
        addToCart: false
      }

      case INCREASE_QUANTITY:
        return {
          ...state,
          quantityRemaining: state.quantityRemaining - 1
        }

      case DECREASE_QUANTITY:
        return {
          ...state,
          quantityRemaining: state.quantityRemaining + 1
        }   

    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    case 'CHECKOUT_REQUEST': 
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
