import React from 'react';

import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";

function RecipesRemove({ items, deleteAll }) {
    function DeleteRecipes(e) {
        deleteAll();
    }

    return (
        <div>
            {items.length > 0 && (
                <Button className="delete"
                        variant="contained"
                        onClick={DeleteRecipes}
                        color="secondary"
                        disableElevation
                >
                    Delete All Recipes
                </Button>
            )}
        </div>
    );
}

export default RecipesRemove;