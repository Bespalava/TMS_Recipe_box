import update from 'immutability-helper';

const initialState = {

};

function recipeReducer(state = initialState, action) {
    switch (action.type) {
        case 'ARTICLE/FETCH_ERROR':
            return update(state, {
                $merge: {
                    fetchArticleErrorMessage: action.payload.message,
                }
            });
        default:
            return state
    }
}

export default recipeReducer;
