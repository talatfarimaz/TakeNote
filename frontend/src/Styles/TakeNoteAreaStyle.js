import {makeStyles} from "@material-ui/core/styles";

const TakeNoteAreaStyle = makeStyles(theme => ({
    searchArea: {
        width: "100%"
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}))


export default TakeNoteAreaStyle;