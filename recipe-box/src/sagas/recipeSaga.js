import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import recipeService from "./../services/recipeService";

function* fetch() {
    try {
        let items = yield call(recipeService.getItems);

        yield put({type: '/FETCH_SUCCESSFULLY', payload: {items}});
    } catch ({message}) {
        yield put({type: '/FETCH_ERROR', payload: {message}});
    }
}

function* fetchSaga() {
    yield takeLatest('/FETCH', fetch);
}

export default function* recipeSaga() {
    yield all([
        fetchSaga(),
    ]);
};
