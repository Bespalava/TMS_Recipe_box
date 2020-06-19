import {call, put, takeLatest, all, select} from 'redux-saga/effects';
import Actions from './../actions/recipe';
import recipeService from './../services/recipeService';


function* fetchRecipes() {
    try {
        let items = yield call(recipeService.getItems);
        yield put(Actions['RECIPE/FETCH_RECIPES_SUCCESSFULLY']({ items }));
        //yield put({type: 'RECIPE/FETCH_RECIPES_SUCCESSFULLY', payload: {items}});
    } catch ({message}) {
        yield put(Actions['RECIPE/FETCH_RECIPES_ERROR']({ message }));
        //yield put({type: 'RECIPE/FETCH_RECIPES_ERROR', payload: {message}});
    }
}

//(action?)
function* addRecipes() {

    try {
        let title = yield select(state => state.recipe.editTitle);
        let description = yield select(state => state.recipe.editDescription);

        let item = yield call(recipeService.addItem, {
            title,
            description,
        });

        yield put(Actions['RECIPE/ADDED_NEW_RECIPE_SUCCESSFULLY']({ item }));
        //yield put({type: 'RECIPE/ADDED_NEW_RECIPE_SUCCESSFULLY', payload: {item}});
    } catch ({message}) {
        yield put(Actions['RECIPE/ADDED_NEW_RECIPE_ERROR']({ message }));
        //yield put({type: 'RECIPE/ADDED_NEW_RECIPE_ERROR', payload: {message}});
    }
}

function* deleteAll(action) {
    try {

        let items = yield call(recipeService.deleteItems);

        yield put(Actions['RECIPE/DELETE_ALL_RECIPES_SUCCESSFULLY']({ items })
        );
    } catch ({ message }) {
        yield put(Actions['RECIPE/DELETE_ALL_RECIPES_ERROR']({ message }));
    }
}



function* fetchRecipesSaga() {
    yield takeLatest('RECIPE/FETCH_RECIPES', fetchRecipes);
}


function* addRecipeSaga() {
    yield takeLatest('RECIPE/ADD_NEW_RECIPE', addRecipes);
}

function* deleteRecipesSaga() {
    yield takeLatest("RECIPE/DELETE_ALL_RECIPES", deleteAll);
}

export default function* recipeSaga() {
    yield all([
        fetchRecipesSaga(),
        addRecipeSaga(),
        deleteRecipesSaga(),
    ]);
};
