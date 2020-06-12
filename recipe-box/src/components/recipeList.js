import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function recipeList({fetchRecipes, items, fetchRecipeError}) {
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

recipeList.propTypes = {
    items: PropTypes.array,
    fetchRecipes: PropTypes.func,
    fetchRecipeError: PropTypes.string,
};

export default recipeList;