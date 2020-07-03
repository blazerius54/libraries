import {
    call, takeEvery, put,
} from 'redux-saga/effects';
import { libraryListSuccess, libraryListError } from './actions';
import { LIBRARY_LIST_FETCH } from './consts';
import { getLibrariesData } from './service';

export function* fetchLibraryInfo() {
    try {
        const response = yield call(getLibrariesData);
        yield put(libraryListSuccess(response));
    } catch (e) {
        yield put(libraryListError());
    }
}

export function* watchLibrarySaga() {
    yield takeEvery(LIBRARY_LIST_FETCH, fetchLibraryInfo);
}
