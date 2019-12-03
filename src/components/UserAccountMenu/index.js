import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';

const UserAccountMenu = props => {
    const { logout } = props;
    const menuId = 'user-account-menu';
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleUserAccountMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };
    const isMenuOpen = Boolean(anchorEl);
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        handleMenuClose();
        if (logout) {
            logout();
        }
    };

    return (
        <>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleUserAccountMenuOpen}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </Menu>
        </>
    );
};

UserAccountMenu.propTypes = {
    logout: PropTypes.func.isRequired,
};
export default UserAccountMenu;
