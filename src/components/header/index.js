import React from 'react';
//gatsby imports
import { Link as GatsbyLink } from 'gatsby';

//material ui imports
import { AppBar, Typography, Toolbar, Container, Grid, Hidden } from '@material-ui/core'


//comoponent import
import NavBar from '../navBar'
// import ElevationScroll from './elevationScroll';
//style imports
import useStyles from './style';

const Header = () => {
    const classes = useStyles();
    
    return (
        <header>
            {/* <ElevationScroll {...props}> */}
                <AppBar color="primary" position="static" elevation={2} className={classes.appbar} >
                    {/* Desktop Section */}
                    <Hidden mdUp>
                        <Grid container justify="center">
                            <Toolbar >

                                <Typography variant="h5" className={classes.typo}>
                                    <GatsbyLink to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        Mattu Hotel
                                </GatsbyLink>

                                </Typography>


                            </Toolbar>
                        </Grid>
                        <Grid container justify="center">
                            <NavBar />
                        </Grid>
                    </Hidden>
                    {/* Mobile Section */}
                    <Hidden smDown>
                        <Container>
                            <Grid container>

                                <Toolbar className={classes.title}>
                                    <Typography variant="h5" className={classes.typo} >
                                        <GatsbyLink to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Mattu Hotel
                                    </GatsbyLink>
                                    </Typography>
                                </Toolbar>

                                <NavBar />
                            </Grid>
                        </Container>
                    </Hidden>
                </AppBar>
            {/* </ElevationScroll> */}
        </header >
    );
}

export default Header;
