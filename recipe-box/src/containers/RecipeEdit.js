import {connect} from 'react-redux';

import RecipeEdit from "../components/RecipeEdit";

const mapStateToProps = state => {
    return {
        title: state.recipe.editTitle,
        description: state.recipe.editDescription,

        errorMessage: state.recipe.createItemErrorMessage,
        editSuccessfully: state.recipe.editSuccessfully,
    }
};
const mapDispatchToProps = (dispatch, state) => {
    return {
        editField: (fieldName, value) => dispatch({
            type: 'RECIPE/EDIT_FIELD',
            payload: {
                fieldName,
                value
            }
        }),
        onSubmit: () => dispatch({
            type: 'RECIPE/ADD_NEW_RECIPE',
        }),

        reset: () => dispatch({
            type: 'RECIPE/RESET_EDIT',
        }),
    };

};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecipeEdit);
