import React from 'react';

//material ui imports
import { Typography, Grid, Container } from '@material-ui/core';

//style imports
import useStyles from '../homeContent/style';
//hooks imports
import useRooms from '../../hooks/useRooms';

//component import
import RoomPreview from '../roomPreview';

const Rooms = () => {
    const classes = useStyles();
    const rooms = useRooms();
    console.log(rooms);

    return (
        <Container className={classes.container}>
            <Grid container justify="center" alignItems="flex-start" spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h4" gutterBottom className={classes.typo}>Find the perfect room for you</Typography>
                </Grid>
                {rooms.map(room => (
                    <RoomPreview key={room.id} room={room} />
                ))}
            </Grid>

        </Container>
    );
}

export default Rooms;




