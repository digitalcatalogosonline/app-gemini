"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function CardApp({ tittle, imageUrl, appUrl }) {
    return (
        <Card sx={{ minWidth: 360, maxWidth: 450 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" fontWeight={600} component="div" textAlign={"center"}>
                        {tittle}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" variant="contained" sx={{ margin: "0 auto" }} onClick={() => window.location.href = appUrl}>
                    Utilizar app
                </Button>
            </CardActions>
        </Card>
    );
}
