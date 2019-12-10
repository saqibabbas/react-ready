import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import PropTypes from 'prop-types';

const SimpleSnackbar = props => {
    const {
        message,
        openSnackBar,
        handleSnackBarClose,
        action,
        duration,
    } = props;

    const handleClose = () => {
        handleSnackBarClose();
    };
    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={openSnackBar}
                autoHideDuration={duration || 2000}
                onClose={handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
            >
                <SnackbarContent
                    style={{
                        backgroundColor: '#fafafa',
                        color: 'black',
                    }}
                    action={action}
                    message={<span id="client-snackbar">{message}</span>}
                />
            </Snackbar>
        </div>
    );
};

SimpleSnackbar.propTypes = {
    message: PropTypes.string.isRequired,
    openSnackBar: PropTypes.bool.isRequired,
    handleSnackBarClose: PropTypes.func.isRequired,
    action: PropTypes.node,
    duration: PropTypes.number,
};

export default SimpleSnackbar;
