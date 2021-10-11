import {makeStyles} from "@material-ui/core/styles";

const AddBookModalStyle = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    addBookArea: {
        width: "100%"
    }
}));

export default AddBookModalStyle;