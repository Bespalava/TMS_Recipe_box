import React from 'react';

function RecipesRemove({ items, deleteAll }) {
    function DeleteRecipes() {
        deleteAll();
    }
    return (
        <div>
            {items.length > 0 && (
                <button className="ButtonsStyle" onClick={DeleteRecipes}>Delete All Recipes</button>
            )}
        </div>
    );
}

export default RecipesRemove;