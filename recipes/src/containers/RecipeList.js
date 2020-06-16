// import {connect} from 'react-redux';
//
// import RecipeList from "../components/RecipeList";
//
// const mapStateToProps = state => {
//     return {
//         items: state.recipe.recipes,
//     }
// };
// const mapDispatchToProps = dispatch => {};
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(RecipeList);
//

import {connect} from 'react-redux';

import RecipeList from "../components/RecipeList";

const mapStateToProps = state => {
    return {
        items: state.recipe.items, //articles- данные
    }
};
const mapDispatchToProps = dispatch => {
    return {
        fetchRecipes: () => dispatch({
            type: 'RECIPE/FETCH',
        }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecipeList);