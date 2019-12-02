import React from 'react';
import Container from '@material-ui/core/Container';
import Copyright from './CopyRight';

const Footer = ({ classes }) => (
    <footer className={classes.footer}>
        <Container maxWidth="lg">
            <Copyright />
        </Container>
    </footer>
);

export default Footer;
