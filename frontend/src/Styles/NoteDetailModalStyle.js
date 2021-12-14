import {makeStyles} from "@material-ui/core/styles";

const NoteDetailModalStyle = makeStyles(theme => ({
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
    iconButtons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    contentGrid: {
        textAlign: "center",
        padding: "5px"
    },
    noteStyle: {
        fontSize: "14px"
    },
    pinButton: {
        textAlign: "right",
    },
    textAreaStyle: {
        width: "100%",
        textAlign: "center",
        marginBottom: "10px"
    },
    cancelButton: {
        textAlign: "right"
    },
    cancelButtonText: {
        fontWeight: "bold",
        fontSize: "13px"
    },
    detailedNoteArea: {
        marginBlockEnd: "15px"
    },
    paperFullWidth: {
        width: "100%"
    },
    paperFullWidthMargin: {
        margin: "unset"
    },
    bookDetail: {
        textAlign: "center",
        fontWeight: "bold",
        margin: "10px"
    }
}))

export default NoteDetailModalStyle;
