// import React, {useEffect} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import PropTypes from 'prop-types';
//
// const useStyles = makeStyles({
//     table: {
//         minWidth: 650,
//     },
// });
//
// function RecipeList({fetchRecipes, items, fetchRecipeError}) {
//     useEffect(() => {
//         fetchRecipes();
//     }, []);
//
//     useEffect(() => {
//         if (fetchRecipeError) {
//             alert(fetchRecipeError);
//         }
//     }, [fetchRecipeError]);
//
//     const classes = useStyles();
//
//     return (
//         <div>
//             <TableContainer component={Paper}>
//                 <Table className={classes.table} aria-label="simple table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>#</TableCell>
//                             <TableCell align="right">Title</TableCell>
//                             <TableCell align="right">Description</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {items.map(({id, title, description}) => (
//                             <TableRow key={id}>
//                                 <TableCell component="th" scope="row">
//                                     {id}
//                                 </TableCell>
//                                 <TableCell align="right">{title}</TableCell>
//                                 <TableCell align="right">{description}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// }
//
// RecipeList.propTypes = {
//     items: PropTypes.array,
//     fetchRecipes: PropTypes.func,
//     fetchRecipeError: PropTypes.string,
// };
//
// export default RecipeList;

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function RecipeList({items, fetchRecipes}) {
    useEffect(() => {
        fetchRecipes();
    }, []);

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
};

export default RecipeList;
