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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
import { useCookies } from 'react-cookie';


function Shop() {
    const { setShopPageHeight, shopPageHeight, isLoading, setLoading, toastify, toastPopup, setOnHome, isHome, isFirstTimeLoadShop, setFirstTimeLoadShop, selectedDetailData, setSelectedDetailData } = useContext(DataContext);

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [cookies, setCookie] = useCookies(['selectedDetailProduct']);

    let isMobile = width <= 570;
    let isMDthreshold = width <= 900;

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    function handleWindowHeightSizeChange() {
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        if (isFirstTimeLoadShop) {
            setFirstTimeLoadShop(false)
            setTimeout(() => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }, 1);
        }
    }, [])

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
        image: "product1.jpeg",
        detailImage1: "product1.jpeg",
        detailImage2: "product5.jpeg"
    },
    {
        name: "Ultraboost DNA City Pack",
        description: "Own your unique style in contemporary",
        image: "product2.jpeg",
        detailImage1: "product2.jpeg",
        detailImage2: "product5.jpeg"
    },
    {
        name: "SUPERNOVA",
        description: "Why lives just one liffe when you can live them all?",
        image: "product3.jpeg",
        detailImage1: "product3.jpeg",
        detailImage2: "product5.jpeg"
    },
    {
        name: "ADIDAS X MARIMEKKO",
        description: "Embrace your own evolution",
        image: "product4.jpeg",
        detailImage1: "product4.jpeg",
        detailImage2: "product5.jpeg"
    },
    {
        name: "ADIDAS X PARLEY",
        description: "A better choice for our planet",
        image: "product5.jpeg",
        detailImage1: "product5.jpeg",
        detailImage2: "product5.jpeg"
    },
    ]

    const navToHome = () => {
        setOnHome(true);
        history.push("/");
    };

    const navToDetailProduct = (data) => {
        setSelectedDetailData(data)
        setCookie("selectedDetailProduct", data)
        setOnHome(false)
        document.getElementById("navbar").classList.remove("stickyHeader")
        document.getElementById("iconNavbar").classList.remove("displayNone")
        document.getElementById("buttonNavbar").classList.remove("displayNone")
        document.getElementById("titleNavbar").classList.remove("flexgrow0")
        history.push("detailproduct");
    };

    const addToCart = () => {
        alert("added to cart")
    }

    return (
        <Grid id="mainBodyShop" container spacing={2} >
            <Grid xs={0} md={2} style={{ display: isMDthreshold ? "none" : "" }}>
                {/* <Item> */}
                <Container sx={{ py: 2, ml: 2 }} maxWidth="false">
                    {/* End hero unit */}
                    <Grid style={{ textAlign: "start", height: shopPageHeight }} sx={{ py: 3 }}>
                        <StickyBox offsetTop={20} offsetBottom={20}>
                            <div>
                                Filter
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox style={{ color: "black" }} defaultChecked />} label="All" />
                                    <FormControlLabel control={<Checkbox style={{ color: "black", }} />} label="Forhuman2" />
                                </FormGroup>
                            </div>
                        </StickyBox>
                    </Grid>
                </Container>
                {/* </Item> */}
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
                        {catalogData.map((card, index) => (
                            <Grid item key={index} xs={12} sm={4} md={4}>
                                <Card
                                    key={index}
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{ height: '100%', }}
                                        image={card.image}
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 0 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.name}
                                        </Typography>
                                        <Typography>
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button style={{ color: "white" }} onClick={addToCart} size="small">Add to Cart</Button>
                                        <Button style={{ color: "white" }} onClick={() => navToDetailProduct(card)} size="small">Detail</Button>
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
