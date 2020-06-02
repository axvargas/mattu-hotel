import React from 'react';

// gatsby imports
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
//material ui imports
import { Typography, Grid, Container } from '@material-ui/core';

//style imports
import useStyles from './style';
const HomeContent = () => {
    const classes = useStyles();
    const info = useStaticQuery(graphql`
        query {
            allDatoCmsPage(filter:{ slug:{ eq: "home" } }){
                nodes {
                    title
                    content
                    image{
                        fluid(maxWidth: 7952){
                            ...GatsbyDatoCmsFluid
                        }
                    }
        
                }
            }
        }
    `);

    const { title, content, image } = info.allDatoCmsPage.nodes[0];

    return (
        <Container className={classes.container}>
            <Grid container justify="center" alignItems="flex-start" spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h4" gutterBottom className={classes.typo}>{title}</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography variant="body1" component="p" className={classes.body}>{content}</Typography>

                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

                    <Image
                        fluid={image.fluid}
                        alt={title}
                        className={classes.img}
                    />

                </Grid>
            </Grid>
        </Container>

    );
}

export default HomeContent;
