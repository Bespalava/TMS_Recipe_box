import { createAction } from 'redux-actions';

export default {
    //Recipe list
    'RECIPE/FETCH_RECIPES_SUCCESSFULLY': createAction('RECIPE/FETCH_RECIPES_SUCCESSFULLY'),
    'RECIPE/FETCH_RECIPES_ERROR': createAction('RECIPES/FETCH_RECIPES_ERROR'),
    'RECIPE/FETCH_RECIPES': createAction('RECIPE/FETCH_RECIPES'),
    //add new
    'RECIPE/ADDED_NEW_RECIPE_SUCCESSFULLY': createAction('RECIPE/ADDED_NEW_RECIPE_SUCCESSFULLY'),
    'RECIPE/ADDED_NEW_RECIPE_ERROR': createAction('RECIPE/ADDED_NEW_RECIPE_ERROR'),
    'RECIPE/ADD_NEW_RECIPE': createAction('RECIPE/ADD_NEW_RECIPE'),
    'RECIPE/RESET_EDIT': createAction('RECIPE/RESET_EDIT'),
    //delete all
    'RECIPE/DELETE_ALL_RECIPES_SUCCESSFULLY': createAction('RECIPE/DELETE_ALL_RECIPES_SUCCESSFULLY'),
    'RECIPE/DELETE_ALL_RECIPES_ERROR': createAction('RECIPE/DELETE_ALL_RECIPES_ERROR'),
    'RECIPE/DELETE_ALL_RECIPES': createAction('RECIPE/DELETE_ALL_RECIPES'),

}