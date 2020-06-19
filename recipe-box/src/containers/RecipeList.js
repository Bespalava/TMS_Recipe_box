import {connect} from 'react-redux';

import RecipeList from '../components/RecipeList';
import Actions from './../actions/recipe';

const mapStateToProps = state => {
    return {
        items: state.recipe.recipes,
        fetchRecipeError: state.recipe.fetchRecipeError,
    }
};
const mapDispatchToProps = dispatch => {
    return {

        fetchRecipes: () => dispatch(Actions['RECIPE/FETCH_RECIPES']()),

        // fetchRecipes: () => dispatch({
        //     type: 'RECIPE/FETCH_RECIPES',
        // }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecipeList);
