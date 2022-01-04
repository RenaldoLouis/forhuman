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
import { useCookies } from 'react-cookie';

function DetailProduct() {
    const { setShopPageHeight, shopPageHeight, isLoading, setLoading, toastify, toastPopup, setOnHome, isHome, selectedDetailData, setSelectedDetailData, } = useContext(DataContext);

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [cookies, setCookie] = useCookies(['selectedDetailProduct']);

    let isMobile = width <= 570;
    let isTablet = width <= 1024;

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    function handleWindowHeightSizeChange() {
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        setOnHome(true);
    }, [])

    const catalogData = [{
        name: "SUPERTURF X ATMOS",
        description: "Bright,bold and glazed",
        image: "product3.jpeg",
        detailImage1: "product3.jpeg"
    },
    {
        name: "Ultraboost DNA City Pack",
        description: "Own your unique style in contemporary",
        image: "product3.jpeg",
        detailImage1: "product3.jpeg"
    },
    {
        name: "SUPERNOVA",
        description: "Why lives just one liffe when you can live them all?",
        image: "product3.jpeg",
        detailImage1: "product3.jpeg"
    },
    {
        name: "ADIDAS X MARIMEKKO",
        description: "Embrace your own evolution",
        image: "product4.jpeg",
        detailImage1: "product4.jpeg"
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
        speed: 1000,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 3
    };

    useEffect(() => {
        setTimeout(() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }, 1);
    }, [])

    return (
        <Grid container spacing={2}>

            <Grid style={{ overflow: "hidden" }} sx={{ pt: 2 }} xs={12}>
                {/* <Container sx={{ pl: 5 }}> */}
                <Slider style={{ overflow: "hidden" }} sx={{ height: '100%', width: "100%", overflow: "hidden" }} id="slider" {...settings}>
                    <img key="image1" sx={{ height: '100%', }} className="fullImage" src={cookies.selectedDetailProduct.detailImage1} alt={cookies.selectedDetailProduct.name}></img>
                    <img key="image2" sx={{ height: '100%', }} className="fullImage" src={cookies.selectedDetailProduct.detailImage2} alt={cookies.selectedDetailProduct.name}></img>
                    <img key="image3" sx={{ height: '100%', }} className="fullImage" src={cookies.selectedDetailProduct.detailImage2} alt={cookies.selectedDetailProduct.name}></img>
                    <img key="image4" sx={{ height: '100%', }} className="fullImage" src={cookies.selectedDetailProduct.detailImage2} alt={cookies.selectedDetailProduct.name}></img>
                    <img key="image5" sx={{ height: '100%', }} className="fullImage" src={cookies.selectedDetailProduct.detailImage2} alt={cookies.selectedDetailProduct.name}></img>
                </Slider>
                {/* </Container> */}
            </Grid>

            <Container sx={{ pr: 0 }}>
                <Grid container sx={{ p: 3 }} xs={12}>
                    <Grid align="left" item xs={4}>
                        <div>For Human Kanye West Edition</div>
                        <div>Rp 100.000</div>
                    </Grid>
                    <Grid item xs={4}>
                        <div>Available Size</div>
                        <div>X L M</div>
                    </Grid>
                    <Grid align="right" item xs={4}>
                        <div>add to cart</div>
                    </Grid>
                </Grid>
                <hr className="solid" />
                <Box sx={{ m: 0.5, mb: 3 }} style={{ textAlign: "left", }}>
                    <h1>ForHuman</h1>
                </Box>
                <Box sx={{ m: 0.5, mb: 2 }} style={{ textAlign: "left" }}>
                    <h3>{cookies.selectedDetailProduct.name}</h3>
                </Box>
                <Box sx={{ m: 0.5, mb: 3 }} style={{ textAlign: "left" }}>
                    {cookies.selectedDetailProduct.description}
                </Box>
            </Container>
        </Grid >
    )
}

export default DetailProduct;