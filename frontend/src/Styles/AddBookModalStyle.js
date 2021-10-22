import {makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "../Themes/DefaultTheme";

const AddBookModalStyle = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
    },
    addBookArea: {
        width: "100%"
    },
    closeIcon: {
        color: DefaultTheme.palette.dark.alternative
    }
}));

export default AddBookModalStyle;
