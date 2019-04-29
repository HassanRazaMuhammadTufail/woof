import {createStore, combineReducers} from 'redux';
import loginUser from '../Reducers/loginReducer';


export default createStore(combineReducers({loginUser}))