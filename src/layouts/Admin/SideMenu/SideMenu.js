import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import MenuItems from './MenuItems';

const SideMenu = props => {
    const { open, classes } = props;
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(
                    classes.drawerPaper,
                    !open && classes.drawerPaperClose,
                ),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}></div>
            <Divider />
            <List>
                <MenuItems {...props} />
            </List>
            <Divider />
        </Drawer>
    );
};

SideMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
};

export default SideMenu;
