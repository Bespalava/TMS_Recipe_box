import React from 'react';
import logo from './logo.svg';
import './App.css';
import recipeList from "./containers/recipeList";

function App() {
  return (
    <div className="container">
      <h2>Recipe box</h2>
      <recipreList />
    </div>
  );
}

export default App;
