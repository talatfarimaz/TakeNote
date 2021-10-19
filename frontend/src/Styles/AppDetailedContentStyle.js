import {makeStyles} from "@material-ui/core/styles";

const AppDetailedContentStyle = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.only('xs')]: {
            marginLeft: "40px",
            marginTop: "57px"
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: "64px"
        },
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.up('sm')]: {
            marginLeft: 0,
        },
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    mainBlur: {
        [theme.breakpoints.only('xs')]: {
            filter: "blur(5px)"
        },
    }
}))

export default AppDetailedContentStyle;