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
import StickyBox from "react-sticky-box/dist/esnext";

function Shop() {
    const { setShopPageHeight, shopPageHeight, isLoading, setLoading, toastify, toastPopup, setOnHome, isHome } = useContext(DataContext);

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    let isMobile = width <= 570;
    let isMDthreshold = width <= 900;

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    function handleWindowHeightSizeChange() {
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        window.addEventListener("resize", handleWindowHeightSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
            window.removeEventListener("resize", handleWindowHeightSizeChange);
        };
    }, [isMobile, height]);

    const history = useHistory();

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

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

    const navToHome = () => {
        setOnHome(true);
        history.push("/");
    };

    useEffect(() => {
        setTimeout(() => {
            var containerHeight = document.getElementById('mainBodyShop').offsetHeight
            setShopPageHeight(containerHeight)
        }, 1);
    }, [])

    return (
        <Grid id="mainBodyShop" container spacing={2} >
            <Grid xs={0} md={2} style={{ display: isMDthreshold ? "none" : "" }}>
                <Container sx={{ py: 2, ml: 2 }} maxWidth="false">
                    {/* End hero unit */}
                    <Grid style={{ textAlign: "start", height: shopPageHeight }} sx={{ py: 1 }}>
                        <StickyBox offsetTop={20} offsetBottom={20}>
                            <div>Sidebar</div>
                        </StickyBox>
                    </Grid>
                </Container>
            </Grid>
            <Grid xs={12} md={10}>
                <Container sx={{ py: 2, ml: 1 }} maxWidth="false">
                    <Grid className="spaceBetweenContent" style={{ textAlign: "start" }} sx={{ py: 1 }}>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                                navToHome()
                            }}
                        >
                            Back To Home
                        </Link>
                        <Button style={{ display: isMDthreshold ? "" : "none" }} variant="outlined">Filter</Button>
                    </Grid>
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
                                    <CardContent sx={{ flexGrow: 0 }}>
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
            </Grid>
        </Grid >
    );
}

export default Shop;
