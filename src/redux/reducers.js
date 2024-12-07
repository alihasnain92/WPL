import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import userReducer from './userReducer'; // Add this line


const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer, // Add this line
});

export default rootReducer;
