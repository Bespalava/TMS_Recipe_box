import update from 'immutability-helper';


const initialState = {
    recipes: [],
    fetchRecipeError: '',

    editTitle: '',
    editDescription: '',
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
            //одни обработчик для формы добавления редактирования рецепта
        case 'RECIPE/EDIT_FIELD':
            return update(state, {
                $merge: {
                    [`edit${action.payload.fieldName}`]: action.payload.value,
                }
            });


         case 'RECIPE/ADDED_NEW_RECIPE_SUCCESSFULLY':
            // return update(state, {
            //     recipes: {
            //         $push: [action.payload.item]
            //     }
            return update(state, {
                        $merge: {
                            recipes: action.payload.item,
                }
             });


        default:
            return state
    }
}

export default recipeReducer;
