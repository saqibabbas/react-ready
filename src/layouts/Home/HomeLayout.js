import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { authProvider } from '../../utils';
import Header from './Header';
import Footer from './Footer';

class HomeLayout extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        authProvider.logout();
        this.setState({});
    }

    render() {
        return <Layout logout={this.logout} {...this.props} />;
    }
}

const Layout = props => {
    const useStyles = makeStyles(theme => ({
        toolbar: {
            borderBottom: `1px solid ${theme.palette.divider}`,
        },
        toolbarTitle: {
            flex: 1,
        },
        toolbarSecondary: {
            justifyContent: 'space-between',
            overflowX: 'auto',
        },
        toolbarLink: {
            padding: theme.spacing(1),
            flexShrink: 0,
        },
        mainFeaturedPost: {
            position: 'relative',
            backgroundColor: theme.palette.grey[800],
            color: theme.palette.common.white,
            marginBottom: theme.spacing(4),
            backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
        },
        mainFeaturedPostContent: {
            position: 'relative',
            padding: theme.spacing(3),
            [theme.breakpoints.up('md')]: {
                padding: theme.spacing(6),
                paddingRight: 0,
            },
        },
        mainGrid: {
            marginTop: theme.spacing(3),
        },
        card: {
            display: 'flex',
        },
        cardDetails: {
            flex: 1,
        },
        cardMedia: {
            width: 160,
        },
        markdown: {
            ...theme.typography.body2,
            padding: theme.spacing(3, 0),
        },
        sidebarAboutBox: {
            padding: theme.spacing(2),
            backgroundColor: theme.palette.grey[200],
        },
        sidebarSection: {
            marginTop: theme.spacing(3),
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            marginTop: theme.spacing(8),
            padding: theme.spacing(6, 0),
        },
    }));

    const { children } = props;
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header classes={classes} {...props} />
                <main>{children}</main>
            </Container>
            <Footer classes={classes} {...props} />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
};

export default HomeLayout;
