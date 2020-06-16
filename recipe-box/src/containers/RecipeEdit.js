import {connect} from 'react-redux';

import RecipeEdit from "../components/RecipeEdit";

const mapStateToProps = state => {
    return {
        title: state.recipe.editTitle,
        description: state.recipe.editDescription,
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
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecipeEdit);
