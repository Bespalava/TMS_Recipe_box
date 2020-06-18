import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import RecipeList from "./containers/RecipeList";
import RecipeEdit from "./containers/RecipeEdit";
import StartPage from "./components/StartPage";
import RecipesRemove from "./containers/RecipesRemove";


function App() {
    function renderNavigation() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Brand</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className='nav-link' activeClassName='active' to="/"><button type="button" className="btn btn-outline-secondary">
                                Home</button></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' activeClassName='active' to="/recipes"><button type="button" className="btn btn-outline-info">
                                Show All Recipes</button></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' activeClassName='active' to="/delete-recipes"><button type="button" className="btn btn-outline-danger">
                                Delete All Recipes</button></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className='nav-link' activeClassName='active' to="/create-recipe"><button type="button" className="btn btn-outline-success">
                                Add a New Recipe</button></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

    return (
        <div className="container">
            {renderNavigation()}

            <Switch>
                <Route path="/" exact>

                    <StartPage />

                </Route>
                <Route path="/recipes">
                    <RecipeList />
                </Route>
                <Route path="/delete-recipes">
                    <RecipesRemove />
                </Route>

                <Route path="/create-recipe">
                    <RecipeEdit />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

