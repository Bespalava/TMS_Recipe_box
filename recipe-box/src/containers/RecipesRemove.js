import { connect } from "react-redux";
import RecipesRemove from "../components/RecipesRemove";

/*import Actions from "./../actions/recipe";*/


const mapStateToProps = state => {
    return {
        items: state.recipe.recipes,
        fetchRecipeError: state.recipe.fetchRecipeError,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        fetchRecipes: () => dispatch({
            type: 'RECIPE/RECIPES_REMOVE_ALL',
            //*** fetchRecipeError: state.recipe.fetchRecipeError,
        }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecipesRemove);



/*const mapStateToProps = (state) => {
    return {
        items: state.recipes.recipes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearAll: () => dispatch(Actions["RECIPE/RECIPES_REMOVE_ALL"]()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesRemove);*/
