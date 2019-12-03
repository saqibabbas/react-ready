import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import PropTypes from 'prop-types';
import UserAccountMenu from '../../../components/UserAccountMenu';

const Header = props => {
    const { handleDrawerToggle, classes } = props;
    return (
        <AppBar position="absolute" className={clsx(classes.appBar)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    className={clsx(classes.menuButton)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}
                >
                    React-Ready
                </Typography>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <UserAccountMenu {...props} />
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default Header;
