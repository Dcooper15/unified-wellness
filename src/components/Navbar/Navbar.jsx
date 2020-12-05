import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, MenuItem, Menu, Typography, Button} from '@material-ui/core';
import LightDarkToggle from '../LightDark/LightDarkToggle';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css';


const useStyles = makeStyles((theme) => ({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.15),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'primary',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 1),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            width: '30ch',
        },
    },
    select: {
        color: '#93A1A1',
        position: 'relative',
        height: "35px",
        padding: theme.spacing(1),
        paddingRight: '0px',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.15),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '25%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    
}));

export default function PrimarySearchAppBar() {

    const classes = useStyles(); 
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    
    // Material UI - Menu
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
         </Menu>
    );

    // Material UI - Mobile Menu
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu 
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >   
            <MenuItem>
                <Link to="/" className="link">Home</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/fitness" className="link">Fitness</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/nature" className="link">Nature</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/nutrition" className="link">Nutrition</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/yoga" className="link">Yoga</Link>
            </MenuItem>
        </Menu>
    );
    
    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{backgroundColor: '#002B36'}}>
                <Toolbar>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                    <Typography>
                        <Link to="/" className="link">Home</Link>
                        <Link to="/fitness" className="link">Fitness</Link>
                        <Link to="/nature" className="link">Nature</Link>
                        <Link to="/nutrition" className="link">Nutrition</Link>
                        <Link to="/yoga" className="link">Yoga</Link>
                    </Typography>
                    
                    
                    
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="secondary"
                        >
                            <Button style={{color: '#93a1a1'}}><MenuIcon /></Button>
                        </IconButton>
                    </div>
                    <LightDarkToggle />     
                </Toolbar>
                
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}