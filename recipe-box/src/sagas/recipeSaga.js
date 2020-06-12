import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import recipeService from "./../services/recipeService";

function* fetchRecipes() {
    try {
        let items = yield call(recipeService.fetchRecipes);

        yield put({type: 'RECIPE/FETCH_RECIPES_SUCCESSFULLY', payload: {items}});
    } catch ({message}) {
        yield put({type: 'RECIPE/FETCH_RECIPES_ERROR', payload: {message}});
    }
}

function* fetchRecipesSaga() {
    yield takeLatest('RECIPE/FETCH_RECIPES', fetchRecipes);
}

export default function* recipeSaga() {
    yield all([
        fetchRecipes(),
    ]);
};
