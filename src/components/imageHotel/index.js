import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

// material ui imports
import { Typography, Grid } from '@material-ui/core';
//style imports
import useStyles from './style';
const ImageHotel = () => {
    const classes = useStyles();
    const { image } = useStaticQuery(
        graphql`
            query {
                image: file(relativePath:{eq:"hero.jpg"}){
                    sharp:childImageSharp{
                         fluid(quality: 100, maxWidth: 3840){
                            ...GatsbyImageSharpFluid_withWebp
                            
                        }
                    }
                }
            }
        `
    );

    return (
        <BackgroundImage
            tag="section"
            className={classes.backgroundI}
            fluid={image.sharp.fluid}
            fadeIn="soft"

        >

            <Grid container direction="column" justify="center" alignItems="center" spacing={3} className={classes.container} >
                <Grid item>
                    <Typography variant="h3" className={classes.typoP}>Welcome to Mattu Hotel</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5" className={classes.typo}>The best place to relax</Typography>
                </Grid>
            </Grid>


        </BackgroundImage>
    );
}

export default ImageHotel;
