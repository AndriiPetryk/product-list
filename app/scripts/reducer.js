import {
  GET_PRODUCT_DATA,
  FIND_PRODUCT_DATA,
  GET_DEFAULT_PRODUCT_DATA,
  IS_LOADING
} from './constants/constants';

export default function(state, action) {
  switch (action.type) {
    case GET_PRODUCT_DATA:
      return [
        ...state,
        ...action.payload
      ]
    case FIND_PRODUCT_DATA:
      return [
        ...action.payload
      ]
    case GET_DEFAULT_PRODUCT_DATA:
      return [
        ...action.payload
      ]
    case IS_LOADING:
      return action.payload

    default:
      return state

  }
}
