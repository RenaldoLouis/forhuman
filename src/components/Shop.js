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
import { isEmpty } from "lodash";
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
    const [isCatalogData, setCatalogData] = useState({});
    const [isfilterAll, setFilterAll] = useState(true);
    const [isfilterProcess, setFilterProcess] = useState(false);
    const [isfilterForHuman2, setFilterForHuman2] = useState(false);
    const [isfilterForHumanKanye, setFilterForHumanKanye] = useState(false);
    const [isFilterCategory, setFilterCategory] = useState([])

    //calculate height
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
        setOnHome(false)
    }, [])

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        window.addEventListener("resize", handleWindowHeightSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
            window.removeEventListener("resize", handleWindowHeightSizeChange);
        };
    }, [isMobile, height]);
    //calculate height

    const history = useHistory();

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));



    const catalogData = [{
        name: "SUPERTURF X ATMOS",
        tag: "second",
        description: "Bright,bold and glazed",
        image: "product1.jpeg",
        detailImage1: "product1.jpeg",
        detailImage2: "product5.jpeg"
    },
    {
        name: "Ultraboost DNA City Pack",
        tag: "second",
        description: "Own your unique style in contemporary",
        image: "product2.jpeg",
        detailImage1: "product2.jpeg",
        detailImage2: "product5.jpeg"
    },
    {
        name: "SUPERNOVA",
        tag: "kanye",
        description: "Why lives just one liffe when you can live them all?",
        image: "product3.jpeg",
        detailImage1: "product3.jpeg",
        detailImage2: "product5.jpeg"
    },
    {
        name: "ADIDAS X MARIMEKKO",
        tag: "kanye",
        description: "Embrace your own evolution",
        image: "product4.jpeg",
        detailImage1: "product4.jpeg",
        detailImage2: "product5.jpeg"
    },
    {
        name: "ADIDAS X PARLEY",
        tag: "kanye",
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

    const filterDataAll = (e) => {
        setFilterAll(true);
        setFilterForHuman2(false);
        setFilterForHumanKanye(false);
        setCatalogData(catalogData)
    }

    const filterDataForHuman2 = (e) => {
        setFilterAll(false);
        setFilterForHuman2(!isfilterForHuman2);
        setFilterProcess(true)
    }

    const filterDataForHumanKanye = (e) => {
        setFilterAll(false);
        setFilterForHumanKanye(!isfilterForHumanKanye);
        setFilterProcess(true)
    }

    useEffect(() => {
        if (isfilterAll) {
            setTimeout(() => {
                setCatalogData(catalogData)
                setFilterCategory([])
            }, 1);
        }
    }, [isfilterAll])

    useEffect(() => {
        let filteredAry = [];

        if (isfilterForHuman2 && !isFilterCategory.includes("second")) {
            setTimeout(() => {
                setFilterCategory((oldArray) => [...oldArray, "second"]);
            }, 1);
        } else {
            setTimeout(() => {
                if (isFilterCategory.includes("second") && !isfilterForHuman2 && !isfilterAll) {
                    filteredAry = isFilterCategory.filter(e => e !== "second")
                    setFilterCategory(filteredAry)
                }
            }, 1);
        }

        if (isfilterForHumanKanye && !isFilterCategory.includes("kanye")) {
            setTimeout(() => {
                setFilterCategory((oldArray) => [...oldArray, "kanye"]);
            }, 1);
        } else {
            if (isFilterCategory.includes("kanye") && !isfilterForHumanKanye && !isfilterAll) {
                setTimeout(() => {
                    filteredAry = isFilterCategory.filter(e => e !== 'kanye')
                    setFilterCategory(filteredAry)
                }, 1);
            }
        }

        if (isfilterForHuman2 === false && isfilterForHumanKanye === false) {
            setTimeout(() => {
                setCatalogData(catalogData)
                setFilterCategory([])
                setFilterAll(true);
            }, 1);
        }

    }, [isfilterForHuman2, isfilterForHumanKanye])

    useEffect(() => {
        setLoading(true);
        if (!isEmpty(isCatalogData) && isfilterProcess) {
            let tempArray = [];
            catalogData.forEach((e) => {
                if (isFilterCategory.indexOf(e.tag) >= 0) {
                    tempArray.push(e);
                }
            })
            if (!isEmpty(tempArray)) {
                setCatalogData(tempArray);
            }
            setFilterProcess(false)
        }
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [isFilterCategory])

    return (
        <Grid id="mainBodyShop" container spacing={2} >
            <Grid item xs={0} md={2} style={{ display: isMDthreshold ? "none" : "", marginLeft: "-12.5px", marginTop: "-18px" }}>
                {/* <Item> */}
                <Container sx={{ py: 2, ml: 2 }} maxWidth="false">
                    {/* End hero unit */}
                    <Grid style={{ textAlign: "start", height: shopPageHeight }} sx={{ py: 3 }}>
                        <StickyBox offsetTop={20} offsetBottom={20}>
                            <div>
                                Filter
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox style={{ color: "black" }}
                                        checked={isfilterAll}
                                        onChange={() => filterDataAll()}
                                    />} label="All" />
                                    <FormControlLabel control={<Checkbox style={{ color: "black", }}
                                        checked={isfilterForHuman2}
                                        onChange={() => filterDataForHuman2()}
                                    />} label="Forhuman2" />
                                    <FormControlLabel control={<Checkbox style={{ color: "black", }}
                                        checked={isfilterForHumanKanye}
                                        onChange={() => filterDataForHumanKanye()}
                                    />} label="Forhuman X Kanye" />
                                </FormGroup>
                            </div>
                        </StickyBox>
                    </Grid>
                </Container>
                {/* </Item> */}
            </Grid>
            <Grid item xs={12} md={10}>
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
                        {!isEmpty(isCatalogData) && isCatalogData.map((card, index) => (
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
