// import update from 'immutability-helper';
//
// const initialState = {
//     items: [],
// };
//
// function recipeReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'RECIPE/FETCH_SUCCESSFULLY':
//             return update(state, {
//                 $merge: {
//                     items: action.payload.items,
//                 }
//             });
//         default:
//             return state
//     }
// }
//
// export default recipeReducer;

import update from 'immutability-helper';

const initialState = {
    items: [],
    editTitle: '',
    editDescription: '',
};

function recipeReducer(state = initialState, action) {
    switch (action.type) {
        case 'RECIPE/FETCH_SUCCESSFULLY':
            return update(state, {
                $merge: {
                    items: action.payload.items,
                }
            });
        case 'RECIPE/EDIT_FIELD':
            return update(state, {
                $merge: {
                    [`edit${action.payload.fieldName}`]: action.payload.value,
                }
            });
        default:
            return state
    }
}

export default recipeReducer;