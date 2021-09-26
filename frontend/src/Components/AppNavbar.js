import React from 'react';
import {alpha, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {useTranslation, withTranslation} from 'react-i18next';
import i18n from '../i18n/i18n';
import AppNavbarStyle from "../Styles/AppNavbarStyle";
import logo from '../assets/images/takenote.png'
import {Avatar, Button, CardActionArea, Divider, Hidden} from "@material-ui/core";
import LanguagesEnum from "../enums/LanguagesEnum";
import LeftMenu from "./LeftMenu";


function AppNavbar(props) {
    const {t} = useTranslation();
    const classes = AppNavbarStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [anchorElMenu, setAnchorElMenu] = React.useState(null);
    const [activeLanguage, setActiveLanguage] = React.useState(i18n.language);

    const changeLanguageSelection = (lng) => {
        i18n.changeLanguage(lng);
        setActiveLanguage(lng);
    };

    const handleClickLanguage = (event) => {
        setAnchorElMenu(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElMenu(null);
    };

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

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

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon/>
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" color={"default"} className={classes.appBarMain}>
                <Toolbar className={classes.toolBarMain}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        aria-label="open drawer"
                        onClick={()=>{}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Avatar variant={"square"} src={logo}>

                    </Avatar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <Hidden only={["xl", "lg", "md", "sm"]}>
                            <InputBase
                                placeholder={t('searchShort')}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Hidden>
                        <Hidden only={["xs"]}>
                            <InputBase
                                placeholder={t('search')}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Hidden>

                    </div>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit"
                                    onClick={() => changeLanguageSelection('tr')}>
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit"
                                    onClick={() => changeLanguageSelection('en')}>
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton color="primary" onClick={handleClickLanguage}>
                            <Typography>{activeLanguage}</Typography>
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorElMenu}
                            keepMounted
                            open={Boolean(anchorElMenu)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => {
                                changeLanguageSelection(LanguagesEnum.English);
                                handleClose()
                            }}>
                                <Typography>
                                    {LanguagesEnum.English}
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => {
                                changeLanguageSelection(LanguagesEnum.Turkish);
                                handleClose()
                            }}>
                                <Typography>
                                    {LanguagesEnum.Turkish}
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Divider variant={"fullWidth"}/>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

export default withTranslation()(AppNavbar)