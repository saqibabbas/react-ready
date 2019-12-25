import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    fab: {
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(125),
    },
}));

const SimpleFab = props => {
    const classes = useStyles();
    const { handleClick } = props;
    const onClick = () => {
        handleClick();
    };
    return (
        <Fab
            color="primary"
            size="small"
            aria-label="add"
            className={classes.fab}
            onClick={onClick}
        >
            <AddIcon />
        </Fab>
    );
};
SimpleFab.propTypes = {
    handleClick: PropTypes.func,
};
export default SimpleFab;
