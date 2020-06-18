import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function RecipeList({items, fetchRecipes, fetchRecipeError}) {
    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);

    useEffect(() => {
        if (fetchRecipeError) {
            alert(fetchRecipeError);
        }
    }, [fetchRecipeError]);

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
            </tr>
            </thead>
            <tbody>
            {
                items.map(({id, title, description}) => (
                    <tr key={id}>
                        <th scope="row">{id}</th>
                        <td>{title}</td>
                        <td>{description}</td>
                    </tr>
                ))
            }

            </tbody>
        </table>

    );
}

RecipeList.propTypes = {
    items: PropTypes.array,
    fetchRecipes: PropTypes.func,

    fetchRecipeError: PropTypes.string,
};

export default RecipeList;
