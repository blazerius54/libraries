import { combineReducers } from 'redux';
import { libraryReducer } from '../modules/reducer';

export const mainReducer = combineReducers({
    libraryReducer,
});
