import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from './CopyRight';

const Footer=({classes})=>(
    <footer className={classes.footer}>
    <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
            Footer
    </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
    </Typography>
        <Copyright />
    </Container>
</footer>
);

export default Footer;