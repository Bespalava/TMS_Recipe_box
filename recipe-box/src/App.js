
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
                            <NavLink className='nav-link' activeClassName='active' to="/" exact>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' activeClassName='active' to="/recipes">Show All Recipes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' activeClassName='active' to="/create-recipe">Add a New Recipe</NavLink>
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
                <Route path="/create-recipe">
                    <RecipeEdit />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

