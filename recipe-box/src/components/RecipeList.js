import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function RecipeList({fetchRecipes, items, fetchRecipeError}) {
    useEffect(() => {
        fetchRecipes();
    }, []);

    useEffect(() => {
        if (fetchRecipeError) {
            alert(fetchRecipeError);
        }
    }, [fetchRecipeError]);

    return (
        <div>
            {
                items.map(({id, title, description}) => (
                    <div key={id}>
                        <span>{id}</span>
                        <span>{title}</span>
                        <span>{description}</span>
                    </div>
                ))
            }
        </div>
    );
}

RecipeList.propTypes = {
    items: PropTypes.array,
    fetchRecipes: PropTypes.func,
    fetchRecipesError: PropTypes.string,
};

export default RecipeList;