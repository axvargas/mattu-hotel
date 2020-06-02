import React from 'react';
import { Link as GatsbyLink } from "gatsby";
import { Tabs, Tab, Toolbar, } from '@material-ui/core'
//style imports
import useStyles from './style';


const NavBar = ({ location }) => {

    const classes = useStyles();
    let value = 0;
    if (location.pathname === '/') {
        value = 0
    }
    else if (location.pathname === '/about') {
        value = 1
    }
    else {
        value = null
    }
    return (
        <Toolbar>
            <Tabs value={value !== null ? value : 0}
                textColor="inherit"
                classes={value !== null ? {
                    indicator: classes.indicator,
                } : { indicator: classes.indicatorNone }}


            >

                <Tab
                    textColor="inherit"
                    component={GatsbyLink}
                    to={'/'}
                    label=" Home"
                // activeClassName={classes.selected}

                />

                <Tab
                    textColor="inherit"
                    component={GatsbyLink}
                    to={'/about'}
                    label="About"
                // activeClassName={classes.selected}

                />
            </Tabs>
        </Toolbar>

    );
}

export default NavBar;
