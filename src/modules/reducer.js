import {
    LIBRARY_LIST_ERROR,
    LIBRARY_LIST_FETCH,
    LIBRARY_LIST_SUCCESS,
} from './consts';
import { defaultLibraryState } from './helpers';

export const libraryReducer = (state = defaultLibraryState, action) => {
    switch (action.type) {
    case LIBRARY_LIST_FETCH:
        return {
            ...state,
            isLoading: true,
            isError: false,
        };
    case LIBRARY_LIST_SUCCESS:
        return {
            ...state,
            isLoading: false,
            list: action.payload,
        };
    case LIBRARY_LIST_ERROR:
        return {
            ...state,
            isLoading: false,
            isError: true,
        };

    default:
        return state;
    }
};
