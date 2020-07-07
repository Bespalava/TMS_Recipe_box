import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function RecipeList({items, fetchRecipes, fetchRecipeError}) {
    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);

    useEffect(() => {
        if (fetchRecipeError) {
            alert('There is no any recipe...');
        }
    }, [fetchRecipeError]);

    return (
        <div>
            {
                items.map(({id, title, description}) => (
                    <div className="card" key={id}>
                        {/*<h5 className="card-header">{title}</h5>*/}
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>

                            {/*<NavLink className="card-link" to={`/recipes`}>*/}
                            {/*    Cancel*/}
                            {/*</NavLink>*/}
                            <a href="/" className="card-link">Edit recipe</a>

                            <a href="/recipes" className="card-link" onClick={remove.bind(this, id)}>Delete recipe</a>

                        </div>
                    </div>

                ))
            }
        </div>
    );
}

RecipeList.propTypes = {
    items: PropTypes.array,
    fetchRecipes: PropTypes.func,

    fetchRecipeError: PropTypes.string,
};

export default RecipeList;
