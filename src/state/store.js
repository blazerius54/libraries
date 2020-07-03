import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { mainReducer } from './reducers';
import { watchLibrarySaga } from '../modules/saga';

const defaultStore = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(
            mainReducer,
            initialState,
            composeEnhancers(
                applyMiddleware(sagaMiddleware),
            ),
        ),
        runSaga: sagaMiddleware.run(watchLibrarySaga),
    };
};

export const store = createStoreWithMiddleware(defaultStore);
