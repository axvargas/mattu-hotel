import React from 'react';

//gatsby imports
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
//material ui imports
import { Typography, Container, Grid } from '@material-ui/core';

//styles import
import useStyles from './style';

export const query = graphql`
    query($slug: String!) {
        allDatoCmsRoom(filter: { slug: {eq: $slug}}){
            nodes{
                title
                content
                image{
                    fluid(maxWidth: 1200){
                        ...GatsbyDatoCmsFluid
                    }
                }      
            }
        }
    }
`


const RoomTemplate = ({ data: { allDatoCmsRoom: { nodes } } }) => {
    const { title, content, image } = nodes[0];
    const classes = useStyles();
    return (
        <Container>
            <Container className={classes.container}>
                <Grid container justify="center" alignItems="center" spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom className={classes.typo}>{title}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Image
                            fluid={image.fluid}
                            alt={title}
                            className={classes.img}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" component="p" className={classes.body}>{content}</Typography>

                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default RoomTemplate;
