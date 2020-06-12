import {connect} from 'react-redux';

import RecipeList from "../components/RecipeList";

const mapStateToProps = state => {
    return {
        items: state.recipe.categories,
        fetchRecipeError: state.recipe.fetchRecipeError,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        fetchRecipes: () => dispatch({
            type: 'RECIPE/FETCH_RECIPES',
        }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecipeList);
