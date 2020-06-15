import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RecipeList from "./containers/RecipeList";

function App() {
    return (
        <div className="container">
            <h1>Recipe box</h1>
            <RecipeList />
        </div>
    );
}

export default App;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import {
//     Switch,
//     Route,
//     NavLink
// } from "react-router-dom";
//
// import RecipeList from "./containers/RecipeList";
// import RecipeEdit from "./components/RecipeEdit";
//
// function App() {
//     function renderNavigation() {
//         return (
//             <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
//                 <a className="navbar-brand" href="#">Medium</a>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <NavLink className='nav-link' activeClassName='active' to="/" exact>Home</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className='nav-link' activeClassName='active' to="/recipes">Recipes</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className='nav-link' activeClassName='active' to="/create-recipe">Create Recipe</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         );
//     }
//
//     return (
//         <div className="container">
//             {renderNavigation()}
//             <Switch>
//                 <Route path="/" exact>
//                     <h2>This is a Recipe App</h2>
//                     <h3>You can record your recipes here</h3>
//                     <h4>All your recipes are stored in your browser's local storage and</h4>
//                 </Route>
//                 <Route path="/recipes">
//                     <RecipeList />
//                 </Route>
//                 <Route path="/create-recipe">
//                     <RecipeEdit />
//                 </Route>
//             </Switch>
//         </div>
//     );
// }
//
// export default App;