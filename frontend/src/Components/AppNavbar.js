import React from 'react';
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
import {Avatar, Hidden} from "@material-ui/core";
import LanguagesEnum from "../enums/LanguagesEnum";
import {useDispatch, useSelector} from "react-redux";
import TableChartIcon from '@material-ui/icons/TableChart';
import SettingsIcon from '@material-ui/icons/Settings';
import SyncIcon from '@material-ui/icons/Sync';
import ViewStreamIcon from '@material-ui/icons/ViewStream';


function AppNavbar(props) {
    const {t} = useTranslation();
    const classes = AppNavbarStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [anchorElMenu, setAnchorElMenu] = React.useState(null);
    const [activeLanguage, setActiveLanguage] = React.useState(i18n.language);
    const [listIcon, setListIcon] = React.useState(true);

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

    const HandleSetListIcon = () => {
        setListIcon(false);
        dispatch({
            type: "NOTES_LIST_PREVIEW",
            payload: true
        });
    }
    const HandleSetTableIcon = () => {
        setListIcon(true)
        dispatch({
            type: "NOTES_LIST_PREVIEW",
            payload: false
        });
    }

    const HandleGetTableOrListIcon = () => {
        if (listIcon) {
            return <ViewStreamIcon color={"secondary"} onClick={HandleSetListIcon} fontSize={"large"}/>;
        } else {
            return <TableChartIcon color="secondary" onClick={HandleSetTableIcon} fontSize={"large"}/>;
        }
    }

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

    const leftMenuOpenState = useSelector(state => state.app.leftMenuOpenState);
    const dispatch = useDispatch();

    return (
        <div className={classes.grow}>
            <AppBar position="fixed" color={"default"} className={classes.appBarMain}>
                <Toolbar className={classes.toolBarMain}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        aria-label="open drawer"
                        onClick={() => {
                            dispatch({
                                type: "LEFT_MENU_OPEN_STATE",
                                payload: !leftMenuOpenState
                            });
                        }
                        }
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
                        <IconButton color="inherit">
                            <SyncIcon color="action" fontSize={"large"}/>
                        </IconButton>
                        <IconButton color="inherit">
                            {HandleGetTableOrListIcon()}
                        </IconButton>
                        <IconButton color="inherit">
                            <SettingsIcon color="primary" fontSize={"large"}/>
                        </IconButton>
                        <IconButton color="primary" onClick={handleClickLanguage} className={classes.languageButton}>
                            <Typography className={classes.languageText}>{activeLanguage}</Typography>
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
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

export default withTranslation()(AppNavbar)