import React from 'react';
import PropTypes from 'prop-types';

function RecipeEdit(
    {
        title,
        description,
        onSubmit,
        editField,
    }
) {
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
    },];

    return (
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

RecipeEdit.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    editField: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default RecipeEdit;
