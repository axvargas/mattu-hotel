import React from 'react';
import { Link as GatsbyLink } from "gatsby";
import { Tabs, Tab, Toolbar, } from '@material-ui/core'
//style imports
import useStyles from './style';


const NavBar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
   
    return (
        <Toolbar>
            <Tabs value={value}
                textColor="inherit"
                classes={{
                    indicator: classes.indicator,
                }}
                onChange={handleChange}
                
            >

                <Tab
                    textColor="inherit"
                    component={GatsbyLink}
                    to={'/'}
                    label=" Home"
                    activeClassName={classes.selected}
                    
                />

                <Tab
                    textColor="inherit"
                    component={GatsbyLink}
                    to={'/about'}
                    label="About"
                    activeClassName={classes.selected}
                  
                />
            </Tabs>
        </Toolbar>

    );
}

export default NavBar;
