import { connect } from "react-redux";
import Actions from './../actions/recipe';
import RecipesRemove from '../components/RecipesRemove';

const mapStateToProps = state => {
    return {
        items: state.recipe.recipes,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        deleteAll: () => dispatch(Actions['RECIPE/DELETE_ALL_RECIPES']()),

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecipesRemove);


