import {createStore} from 'redux';
import cartItem from '../reducers/CartItem';
import CombineReducer from '../reducers/CombineReducer';

const store = createStore(CombineReducer);
// const store = createStore(cartItem);

export default store;
