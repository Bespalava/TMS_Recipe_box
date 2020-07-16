import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import './App.css';

import RecipeList from "./containers/RecipeList";
import RecipeEdit from "./containers/RecipeEdit";
import StartPage from "./components/StartPage";
import RecipesRemove from "./containers/RecipesRemove";

import { useDispatch } from "react-redux";
import Actions from './actions/recipe'
import { connect } from 'react-redux';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(Actions['RECIPES/FETCH_LOAD_DATA']());
        dispatch(Actions['RECIPE/FETCH_RECIPES']());
    }, [dispatch]);

    return (
            <div className='container'>
                <div className='LeftStyle'>
                    <div className='LeftSide'>
                        <NavLink activeClassName='active' to="/" exact><button className="ButtonsStyle">Home</button></NavLink>
                        <NavLink activeClassName='active' to="/create-recipe"><button  className="ButtonsStyle">Add a New Recipe</button></NavLink>
                        <NavLink activeClassName='active' to="/recipes"><button  className="ButtonsStyle">Show All Recipes</button></NavLink>
                        <RecipesRemove />
                    </div>
                    <div className='RightSide'>
                        <Switch>
                            <Route path="/" exact>
                                <StartPage />
                            </Route>
                            <Route path="/create-recipe">
                                <RecipeEdit />
                            </Route>
                            <Route path="/recipes" exact>
                                <RecipeList />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>

    );
}
const mapDispatchToProps = dispatch => {
    return {
        load: () => dispatch(Actions['RECIPE/FETCH_RECIPES']())
    }

};

export default connect (
    mapDispatchToProps
) (App);
