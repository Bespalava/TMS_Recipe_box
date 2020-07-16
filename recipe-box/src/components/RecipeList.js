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
        <div className='container'>

            {
                items.map(({id, title, description}) => (
                    <div className="card text-center mt-1" key={id}>
                        {/*d-md-table-row*/}
                        {/*<div className="card-header">*/}
                        {/*    Featured*/}
                        {/*</div>*/}

                        {/*<h5 className="card-header">{title}</h5>*/}
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            {/*<div className='is-grouped'>*/}
                            <a href="/" className="btnYellow">Edit recipe</a>
                            <div className="divider"/>
                            <a href="/recipes" className="btnRed">Delete recipe</a>
                            {/*</div>*/}

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
