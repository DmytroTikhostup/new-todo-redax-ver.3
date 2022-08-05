import counterReducer from './counterReducer';
import todoReducer from './todoReducer';
import formReducer from './formReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counterReducer,
    todoReducer,
    formReducer,
});

export default rootReducer;
