import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; ///// bootstrap
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