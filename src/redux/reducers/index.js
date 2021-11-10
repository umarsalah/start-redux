import {combineReducers} from 'redux'
import loggedReducer from './isLogged';
import counterReducer from './counter';

const reducer=combineReducers({
    logged:loggedReducer,
    counter:counterReducer
});

export default reducer ;