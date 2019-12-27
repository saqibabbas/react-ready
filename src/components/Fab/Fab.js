import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    dflex: {
        display: 'flex',
    },
    mlauto: {
        marginLeft: 'auto',
        marginBottom: theme.spacing(1),
    },
}));

const SimpleFab = props => {
    const classes = useStyles();
    const { handleClick } = props;
    const onClick = () => {
        handleClick();
    };
    return (
        <div className={classes.dflex}>
            <Fab
                color="primary"
                size="small"
                aria-label="add"
                className={classes.mlauto}
                onClick={onClick}
            >
                <AddIcon />
            </Fab>
        </div>
    );
};
SimpleFab.propTypes = {
    handleClick: PropTypes.func,
};
export default SimpleFab;
