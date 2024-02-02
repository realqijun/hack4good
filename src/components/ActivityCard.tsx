import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css'
// import '../images/windows.jpeg';
import catImage from '../images/cat.jpeg';

interface Activity {
    id?: string | undefined,
    title?: string,
    overview?: string,
    body?: string,
    image?: undefined | string,
    manpower_needed?: number,
    location?: string,
    time_start?: number,
    time_end?: number,
    created_at?: number,
    updated?: number
}

export default function ActivityCard({ id, title, overview, body, image, manpower_needed, location, time_start, time_end, created_at, updated }:Activity) {
    return (
        <div id={id}>
        <Card sx={{
                maxWidth: 300
        }}>
            <CardMedia
                sx={{ height: 140 }}
                image={catImage}
                component="img"
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {overview}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {time_start} to {time_end}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    manpower: {manpower_needed}
                </Typography>
            </CardContent>
            <CardActions>
                <a href="">{location}</a>
                <Button size="small">Apply</Button>
            </CardActions>
        </Card>
        </div>
    );
}