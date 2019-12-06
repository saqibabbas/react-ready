import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
    progress: {
        position: 'relative',
        top: '40%',
        left: '45%',
    },
    loader: {
        position: 'absolute',
        background: 'no-repeat center rgba(255, 255, 255, 0.8)',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 9999,
    },
}));
const LoadingIndicator = props => {
    const classes = useStyles();
    const { isLoading } = props;
    return (
        <>
            {isLoading ? (
                <div className={classes.loader}>
                    <CircularProgress size={100} className={classes.progress} />
                </div>
            ) : null}
        </>
    );
};

LoadingIndicator.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

export default LoadingIndicator;
