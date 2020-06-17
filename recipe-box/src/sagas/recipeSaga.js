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
//2 add result
function* addRecipes() {

    try {

        let title = yield select(state => state.recipe.editTitle);
        let description = select(state => state.recipe.editDescription);
        console.log(title);

        //let title = select('title');

        let item = yield call(recipeService.addItem, {
            title,
            description,
        });


        yield put({type: 'RECIPE/ADDED_NEW_RECIPE_SUCCESSFULLY', payload: {item}});
    } catch ({message}) {
        yield put({type: 'RECIPE/ADDED_NEW_RECIPE_ERROR', payload: {message}});
    }
}


function* deleteAll() {

    console.log("test delete");
    try {
        let items = yield call(recipeService.delRecipes);
        yield put({type: 'RECIPE/FETCH_RECIPES_SUCCESSFULLY', payload: {items}});
    } catch ({message}) {
        // yield put({type: 'RECIPE/RECIPES_REMOVE_ALL_ERROR', payload: {message}});
    }
}



function* fetchRecipesSaga() {
    yield takeLatest('RECIPE/FETCH_RECIPES', fetchRecipes);
}


function* addRecipeSaga() {
    yield takeLatest('RECIPE/ADD_NEW_RECIPE', addRecipes);
}

function* deleteRecipesSaga() {
    yield takeLatest("RECIPES/ALL_REMOVE", deleteAll);
}

export default function* recipeSaga() {
    yield all([
        //fetchRecipes(),
        fetchRecipesSaga(),
        addRecipeSaga(),
        deleteRecipesSaga(),
    ]);
};
