import React from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Copyright from './CopyRight';

const Footer = ({ classes }) => (
    <footer className={classes.footer}>
        <Container maxWidth="lg">
            <Copyright />
        </Container>
    </footer>
);

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Footer;
