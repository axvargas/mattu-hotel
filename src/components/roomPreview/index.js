import React from 'react';
//gatsby imports
import Image from 'gatsby-image';
import {
    Button,
    CardActionArea,
} from "gatsby-theme-material-ui";
//material ui imports
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Grid
} from '@material-ui/core';

//style imports
import useStyles from './style';
const RoomPreview = ({ room }) => {
    const classes = useStyles();
    const { title, content, image, slug } = room;
    return (
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>

            <Card>
                <CardActionArea to={`/${slug}`}>
                    <CardMedia
                        component={Image}
                        alt={title}
                        fluid={image.fluid}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions >
                    <Button size="small" color="primary" to={`/${slug}`} className={classes.btn}>
                        Visit room
                    </Button>

                </CardActions>
            </Card>
        </Grid>
    );
}

export default RoomPreview;
