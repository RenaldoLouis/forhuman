import React, { memo, useState, useContext, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    useLocation,
    useHistory
} from "react-router-dom";

import { DataContext } from "../context/DataContext";


//import MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MailIcon from '@mui/icons-material/Mail';

//CustomComponent
import Modal from './Modal';

function Navbar() {
    const history = useHistory();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const { isLoading, setLoading, toastify, toastPopup, setOnHome, isHome } = useContext(DataContext);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const navToShop = () => {
        setOnHome(false)
        document.getElementById("navbar").classList.remove("stickyHeader")
        document.getElementById("iconNavbar").classList.remove("displayNone")
        document.getElementById("buttonNavbar").classList.remove("displayNone")
        document.getElementById("titleNavbar").classList.remove("flexgrow0")
        history.push("shop");
    };

    const openModalContact = () => {
        setOnHome(false)
        document.getElementById("navbar").classList.remove("stickyHeader")
        document.getElementById("iconNavbar").classList.remove("displayNone")
        document.getElementById("buttonNavbar").classList.remove("displayNone")
        document.getElementById("titleNavbar").classList.remove("flexgrow0")
        history.push("shop");
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))} */}
                <ListItem onClick={navToShop} button key="button1">
                    <ListItemIcon>
                        <ShoppingBagIcon />
                    </ListItemIcon>
                    <ListItemText primary="Buy Now" />
                </ListItem>
                <ListItem onClick={navToShop} button key="button1">
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Checkout" />
                </ListItem>
            </List>
            <Divider />
            <ListItem onClick={() => (modalOpen ? close() : open())} button key="button1">
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Contact Us" />
            </ListItem>
            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </Box >
    );

    window.onscroll = function () {
        if (isHome) {
            if (window.scrollY > 1) {
                document.getElementById("navbar").classList.add("stickyHeader")
                document.getElementById("iconNavbar").classList.add("displayNone")
                document.getElementById("buttonNavbar").classList.add("dissapearText")
                document.getElementById("titleNavbar").classList.add("flexgrow0")
            } else {
                document.getElementById("navbar").classList.remove("stickyHeader")
                document.getElementById("iconNavbar").classList.remove("displayNone")
                document.getElementById("buttonNavbar").classList.remove("dissapearText")
                document.getElementById("titleNavbar").classList.remove("flexgrow0")
            }
        }
    };

    useEffect(() => {
        document.getElementById("navbar").classList.remove("stickyHeader")
        document.getElementById("iconNavbar").classList.remove("displayNone")
        document.getElementById("buttonNavbar").classList.remove("dissapearText")
        document.getElementById("titleNavbar").classList.remove("flexgrow0")
    }, [isHome])

    return (
        <div>
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
            <Box id="navbar" sx={{ flexGrow: 1 }}>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <IconButton
                            id="iconNavbar"
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer("bottom", true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor={"bottom"}
                            open={state["bottom"]}
                            onClose={toggleDrawer("bottom", false)}
                        >
                            {list("bottom")}
                        </Drawer>
                        <Typography id="titleNavbar" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            ForHuman
                        </Typography>
                        <Button id="buttonNavbar" color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default memo(Navbar);