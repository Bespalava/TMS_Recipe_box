import React from "react";

import Button from "@material-ui/core/Button";

function RecipesRemove({ items, deleteAll }) {
    function DeleteRecipes(e) {
       // if (window.confirm("delete?")) {
            deleteAll();
        //}
    }

    return (
        <div>
            {items.length > 0 && (
                <Button className="removed"
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