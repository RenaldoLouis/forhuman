import React, { memo, useState, useEffect, useContext } from 'react';
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
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    useLocation,
    useHistory
} from "react-router-dom";
import { DataContext } from "../context/DataContext"

function DetailProduct() {

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

    useEffect(() => {
        document.addEventListener('readystatechange', event => {
            // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
            if (event.target.readyState === "complete") {
                document.getElementById("carouselDetail").style.maxWidth = "100%";
            }
        });
    }, [])

    return (
        <Grid container spacing={2}>
            <Container id="carouselDetail" sx={{ py: 2 }} style={{ marginLeft: "0", marginRight: "0" }}>
                <Grid >
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="transform 500ms ease-in-out"
                        transitionDuration={1000}
                        containerClass="carousel-container carousel-heigth"
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    >
                        {catalogData.map((catalogData) => (
                            <Card
                                sx={{ display: 'flex', flexDirection: 'column', m: "1%", height: "100%", marginLeft: "1rem" }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{ height: '100%', }}
                                    image={catalogData.image}
                                    alt="random"
                                />
                            </Card>
                        ))}
                    </Carousel>
                </Grid>
            </Container>
            <Grid container xs={12}>
                <Grid item xs={4}>
                    <div>1</div>
                </Grid>
                <Grid item xs={4}>
                    <div>2</div>
                </Grid>
                <Grid item xs={4}>
                    <div>3</div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DetailProduct;