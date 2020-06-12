import update from 'immutability-helper';

const initialState = {
    recipes : [],
    fetchRecipeError: ''
};

function recipeReducer(state = initialState, action) {
    switch (action.type) {
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
        default:
            return state
    }
}

export default recipeReducer;
