import React from 'react';
import './App.css';
import recipeList from "./containers/RecipeList";

function App() {
    return (
        <div className="container">
            <h1>Recipe box</h1>
            <recipeList />
        </div>
    );
}

export default App;