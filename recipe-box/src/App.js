import React from 'react';
import './App.css';
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