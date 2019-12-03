import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { authProvider } from '../../utils';
import Header from './Header';
import SideMenu from './SideMenu';
import Footer from './Footer';

class AdminLayout extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        authProvider.logout();
        this.props.history.push('/');
    }

    render() {
        return <Layout logout={this.logout} {...this.props} />;
    }
}

const Layout = props => {
    const { children } = props;
    const drawerWidth = 240;

    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
        },
        toolbar: {
            paddingRight: 24, // keep right padding when drawer closed
        },
        toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        title: {
            flexGrow: 1,
        },
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
        fixedHeight: {
            height: 240,
        },
    }));
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header
                open={open}
                classes={classes}
                handleDrawerToggle={handleDrawerToggle}
                {...props}
            />
            <SideMenu open={open} classes={classes} {...props} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {children}
                    <Footer {...props} />
                </Container>
            </main>
        </div>
    );
};

AdminLayout.propTypes = {
    history: PropTypes.object.isRequired,
};
Layout.propTypes = {
    children: PropTypes.node,
};

export default withRouter(AdminLayout);
