import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

function RecipeEdit(
    {
        title,
        description,

        onSubmit,
        editField,

        errorMessage,
        editSuccessfully,
        reset,
    }

) {
    useEffect(() => {
        if (errorMessage) {
            alert('There is no any recipes...');
        }
    }, [errorMessage]);


    function submit(e) {
        e.preventDefault();

        onSubmit();
    }

    function changeField(fieldName, e) {
        editField(fieldName, e.target.value);
    }

    const fields = [{
        value: title,
        name: 'Title',
    }, {
        value: description,
        name: 'Description',
    }];

    if (editSuccessfully) {
        reset();

        return (
            <Redirect to='/recipes'/>
        );
    }


    return (
        //<input style="height:50px"/>
        <div>
            <form onSubmit={submit}>
                {
                    fields.map((field) => (
                        <div className="form-group">
                            <label htmlFor={`id-${field.name}`}>{field.name}</label>
                            <input
                                value={field.value}
                                className="form-control"
                                id={`id-${field.name}`}
                                placeholder={`Enter ${field.name}`}
                                onChange={changeField.bind(this, field.name)}
                                required
                            />
                        </div>
                    ))
                }
                <button type="submit" className="btn btn-success">Submit Recipe</button>
                <button type="cancel" className="btn btn-danger" >Cancel</button>
            </form>
        </div>
    );
}

RecipeEdit.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    editField: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    editSuccessfully: PropTypes.bool,
    reset: PropTypes.func,
};

export default RecipeEdit;
