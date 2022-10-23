import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Events.css"

const Events = () => {
    return (
        <div>
            <div className='paralx'></div>
            <div className='events-page-container' id='events'>
                <br />
                <Card sx={{ maxWidth: 345, }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://cdn.pixabay.com/photo/2016/06/24/12/36/surf-1477175__340.jpg"
                            alt="green iguana"
                        />
                        <CardContent className='event-Cards'>
                            <Typography gutterBottom variant="h5" component="div">
                                Poleg beach pro's 15.2
                            </Typography>
                            <Typography variant="body2" >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi im omnis, quisquam dolore ipsum ullam. Ut cumque similique quo. Enim, voluptas?, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <br />
                <Card sx={{ maxWidth: 345, }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://cdn.pixabay.com/photo/2012/11/28/10/22/wind-surfing-67627__340.jpg"
                            alt=""
                        />
                        <CardContent className='event-Cards'>
                            <Typography gutterBottom variant="h5" component="div">
                                kite freaky friday 4.10
                            </Typography>
                            <Typography variant="body2" >
                                Lorem ipsum sit distinctio fugit a nemo atque delectus dolore possimus eligendi! reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <br />
                <Card sx={{ maxWidth: 345, }}>
                    <CardActionArea >
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://cdn.pixabay.com/photo/2016/01/13/15/55/surf-1138210__340.jpg"
                            alt="special chileds surf tournemet"
                        />
                        <CardContent className='event-Cards'>
                            <Typography gutterBottom variant="h5" component="div">
                                childrens special 2.7
                            </Typography>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt excepturi ipsam ea  aliquid harum error? reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div >

    )
}

export default Events