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
        [theme.breakpoints.up('lg')]: {
            padding: "40px"
        },
        [theme.breakpoints.only('md')]: {
            padding: "30px"
        },
        [theme.breakpoints.only('sm')]: {
            padding: "20px"
        },
        [theme.breakpoints.only('xs')]: {
            padding: "10px"
        },
    }
}))


export default StickyNoteStyle;