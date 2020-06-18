import update from 'immutability-helper';

const initialState = {
    recipes: [],
    fetchRecipeError: '',

    editTitle: '',
    editDescription: '',

    editSuccessfully: false,
    createItemErrorMessage: '',
};

function recipeReducer(state = initialState, action) {
    switch (action.type) {
        //Recipes list
        case 'RECIPE/FETCH_RECIPES_SUCCESSFULLY':
            return update(state, {
                $merge: {
                    recipes: action.payload.items,
                }
            });
        case 'RECIPE/FETCH_RECIPES_ERROR':
            return update(state, {
                $merge: {
                    fetchRecipeError: action.payload.message,
                }
            });

        //Edit every field
        case 'RECIPE/EDIT_FIELD':
            return update(state, {
                $merge: {
                    [`edit${action.payload.fieldName}`]: action.payload.value,
                }
            });

        //Recipe item subscribes
        case 'RECIPE/ADDED_NEW_RECIPE_SUCCESSFULLY': //--new
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
        case 'RECIPE/ADDED_NEW_RECIPE_ERROR':
            return update(state, {
                $merge: {
                    createItemErrorMessage: action.payload.message,
                }
            });

        //-
        case 'RECIPE/RESET_EDIT':
            return update(state, {
                $merge: {
                    editSuccessfully: initialState.editSuccessfully,
                }
            });


        //Recipes delete Recipes list
        case 'RECIPE/RECIPES_REMOVE_ALL': //*
            return update(state, {
                $set: {
                    recipes:[],
                }
            });

        default:
            return state
    }
}

export default recipeReducer;
