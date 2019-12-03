import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const MenuItems = () => {
    return (
        <div>
            <ListItem component={Link} to="/" button>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>

            <ListItem component={Link} to="/dashboard" button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem component={Link} to="/customers" button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Customers" />
            </ListItem>
            <ListItem component={Link} to="/products" button>
                <ListItemIcon>
                    <FastfoodIcon />
                </ListItemIcon>
                <ListItemText primary="Products" />
            </ListItem>
        </div>
    );
};

export default MenuItems;
