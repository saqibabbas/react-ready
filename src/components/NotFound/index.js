import React from 'react';
import HotTub from '@material-ui/icons/HotTub';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            height: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            height: '100vh',
            marginTop: '-3em',
        },
    },
    icon: {
        width: '9em',
        height: '9em',
    },
    message: {
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif',
        opacity: 0.5,
        margin: '0 1em',
    },
}));

const NotFound = () => {
    const classes = styles();
    return (
        <div className={classes.container}>
            <div className={classes.message}>
                <HotTub className={classes.icon} />
                <h1>404</h1>
                <h1>Not found</h1>
            </div>
        </div>
    );
};

export default NotFound;
