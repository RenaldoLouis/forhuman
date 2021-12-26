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
//Carousel Libary
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function DetailProduct() {
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

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <Grid container spacing={2}>
            <Container id="carouselDetail" sx={{ py: 3 }}>
                <Grid xs={12}>
                    <Slider className="fullImage" id="slider" {...settings}>
                        {catalogData.map((data) => (
                            <div>
                                <img style={{ width: "100%" }} src={data.image} alt={data.name}></img>
                            </div>
                        ))}
                    </Slider>
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