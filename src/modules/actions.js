import { LIBRARY_LIST_ERROR, LIBRARY_LIST_FETCH, LIBRARY_LIST_SUCCESS } from './consts';

export const libraryListFetch = () => ({
    type: LIBRARY_LIST_FETCH,
});

export const libraryListSuccess = (payload) => ({
    type: LIBRARY_LIST_SUCCESS,
    payload,
});

export const libraryListError = () => ({
    type: LIBRARY_LIST_ERROR,
});
