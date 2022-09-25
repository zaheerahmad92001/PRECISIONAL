import {combineReducers} from 'redux';
import CartItem from './CartItem';
import Auth from './AuthReducer';
import ApiReducer from './ApiReducer';

export default combineReducers({
  ApiReducer,

  CartItem,
  Auth,
});
