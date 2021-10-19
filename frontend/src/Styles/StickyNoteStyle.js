import {makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "../Themes/DefaultTheme";

const StickyNoteStyle = makeStyles(theme => ({
    iconButtons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    stickyCardArea: {
        border: "0.1em solid "+ DefaultTheme.palette.dark.contrastDark,
        borderRadius: "10px",
    },
    stickyPadding: {
        border: "0.1em solid "+ DefaultTheme.palette.dark.contrastDark,
        borderRadius: "10px",
        [theme.breakpoints.up('lg')]: {
            margin: "15px"
        },
        [theme.breakpoints.only('md')]: {
            margin: "12px"
        },
        [theme.breakpoints.only('sm')]: {
            margin: "9px"
        },
        [theme.breakpoints.only('xs')]: {
            margin: "6px"
        },
    },
    contentGrid: {
        textAlign: "center",
        padding: "5px"
    }
}))


export default StickyNoteStyle;