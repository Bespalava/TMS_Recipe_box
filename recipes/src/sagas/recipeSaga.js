// import {call, put, takeLatest, all, select} from 'redux-saga/effects';
//
// import recipeService from './../services/recipeService';
//
// function* fetchRecipes() {
//     try {
//         let items = yield call(recipeService.getItems);
//
//         yield put({type: 'RECIPE/FETCH_SUCCESSFULLY', payload: {items}});
//     } catch ({message}) {
//         yield put({type: 'RECIPE/FETCH_ERROR', payload: {message}});
//     }
// }
//
// function* fetchRecipesSaga() {
//     yield takeLatest('RECIPE/FETCH', fetchRecipes);
// }
//
// export default function* recipeSaga() {
//     yield all([
//         fetchRecipesSaga(),
//     ]);
// };

import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import recipeService from './../services/recipeService';

function* fetchRecipes() {
    try {
        let items = yield call(recipeService.getItems);

        yield put({type: 'RECIPE/FETCH_SUCCESSFULLY', payload: {items}});
    } catch ({message}) {
        yield put({type: 'RECIPE/FETCH_ERROR', payload: {message}});
    }
}

function* addRecipes() {
    try {
        let title = select('title');
        let description = select('description');

        let item = yield call(recipeService.addItem, {
            title,
            description,
        });

        yield put({type: 'RECIPE/ADDED_NEW_RECIPE_SUCCESSFULLY', payload: {item}});
    } catch ({message}) {
        yield put({type: 'RECIPE/ADDED_NEW_RECIPE_ERROR', payload: {message}});
    }
}

function* fetchRecipesSaga() {
    yield takeLatest('RECIPE/FETCH', fetchRecipes);
}

function* addRecipeSaga() {
    yield takeLatest('RECIPE/ADD_NEW_RECIPE', addRecipes);
}

export default function* recipeSaga() {
    yield all([
        fetchRecipesSaga(),
        addRecipeSaga(),
    ]);
};
