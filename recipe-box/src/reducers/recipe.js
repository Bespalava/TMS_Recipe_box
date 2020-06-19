import update from 'immutability-helper';
import { handleActions } from 'redux-actions';
import Actions from './../actions/recipe';

const initialState = {
    recipes: [],
    fetchRecipeError: '',

    editTitle: '',
    editDescription: '',

    editSuccessfully: false,
    createItemErrorMessage: '',
};

const recipeReducer = handleActions(
    {
        //Recipes list
        [Actions['RECIPE/FETCH_RECIPES_SUCCESSFULLY']]: (state, action) => {
            return update(state, {
                $merge: {
                    recipes: action.payload.items,
                },
            });
        },

        [Actions['RECIPE/FETCH_RECIPES_ERROR']]: (state, action) => {
            return update(state, {
                $merge: {
                    fetchRecipeError: action.payload.message,
                },
            });
        },

        //Recipes delete Recipes list
        [Actions["RECIPE/DELETE_ALL_RECIPES"]]: (state, action) => {
            return update(state, {
                $set: {
                    recipes: [],
                },
            });
        },

        //--
        [Actions['RECIPE/DELETE_ALL_RECIPES_SUCCESSFULLY']]: (state, action) => {
            return update(state, {
                $merge: {
                    recipes: action.payload.items,
                },
            });
        },

        //Recipe item subscribes
        [Actions['RECIPE/ADDED_NEW_RECIPE_SUCCESSFULLY']]: (state, action) => {
            return update(state, {
                recipes: {
                    $push: [
                        action.payload.item,
                    ]
                },
                $merge: {
                    editSuccessfully: true,
                    editTitle: initialState.editTitle,
                    editDescription: initialState.editDescription,
                }
            });
        },

        [Actions['RECIPE/ADDED_NEW_RECIPE_ERROR']]: (state, action) => {
            return update(state, {
                $merge: {
                    createItemErrorMessage: action.payload.message,
                },
            });
        },

        [Actions['RECIPE/RESET_EDIT']]: (state, action) => {
            return update(state, {
                $merge: {
                    editSuccessfully: initialState.editSuccessfully,
                },
            });
        },

        // [Actions['RECIPE/EDIT_FIELD']]: (state, action) => {
        //     return update(state, {
        //         $merge: {
        //             [`edit${action.payload.fieldName}`]: action.payload.value,
        //         },
        //     });
        // },
    },
    initialState
);

export default recipeReducer;
