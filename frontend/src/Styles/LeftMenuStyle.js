import {makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "../Themes/DefaultTheme";

const drawerWidth = 240;
const LeftMenuStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',

    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        borderRight: "unset",
        backgroundColor: DefaultTheme.palette.secondary.contrastText,
        [theme.breakpoints.up('sm')]: {
            top: "64px"
        },
        [theme.breakpoints.only('xs')]: {
            top: "56px"
        },
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        borderRight: "unset",
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
        backgroundColor: DefaultTheme.palette.secondary.contrastText,
        [theme.breakpoints.up('sm')]: {
            top: "64px"
        },
        [theme.breakpoints.only('xs')]: {
            top: "57px"
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    listItemIcon: {
        marginBlockEnd: "10px",
        borderRadius: "0px 25px 25px 0px",
    }
}))

export default LeftMenuStyle;
