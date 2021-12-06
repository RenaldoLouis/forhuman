import React, { memo, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Content() {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const cards = [1, 2, 3];

    const catalogData = [{
        name: "SUPERTURF X ATMOS",
        description: "Bright,bold and glazed",
        image: "product1.jpeg"
    },
    {
        name: "Ultraboost DNA City Pack",
        description: "Own your unique style in contemporary",
        image: "product2.jpeg"
    },
    {
        name: "SUPERNOVA",
        description: "Why lives just one liffe when you can live them all?",
        image: "product3.jpeg"
    },
    {
        name: "ADIDAS X MARIMEKKO",
        description: "Embrace your own evolution",
        image: "product4.jpeg"
    },
    {
        name: "ADIDAS X PARLEY",
        description: "A better choice for our planet",
        image: "product5.jpeg"
    },
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} style={{ width: "100%" }}>
                <div className="content-card1">
                    <img className="content-card1-image" src="card1-alt.jpg" alt="Italian Trulli" />
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className="content-card2">
                    <img className="content-card2-image" src="card2-alt.jpeg" alt="Italian Trulli" />
                </div>
            </Grid>
            <Container sx={{ py: 4 }}>
                <Grid style={{ height: "100%" }}>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container carousel-heigth"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {catalogData.map((catalogData) => (
                            <Card
                                sx={{ display: 'flex', flexDirection: 'column', m: "1%" }}
                            >
                                <CardMedia
                                    component="img"
                                    // sx={{ p: '10%', }}
                                    image={catalogData.image}
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {catalogData.name}
                                    </Typography>
                                    <Typography>
                                        {catalogData.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button sx={{ color: "white" }} size="small">Shop Now</Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Carousel>
                </Grid>
            </Container>
            <Container sx={{ py: 2, ml: 2 }} maxWidth="false">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={4} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="img"
                                    // sx={{pt: '50%', }}
                                    image="https://source.unsplash.com/random"
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the
                                        content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">View</Button>
                                    <Button size="small">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grid >
    );
}

export default Content;
