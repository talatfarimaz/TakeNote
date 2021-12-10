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
        width: "100%"
    },
    cancelButton: {
        textAlign: "center"
    },
    cancelButtonText: {
        fontWeight: "bold",
        fontSize: "13px"
    },
    detailedNoteArea: {
        marginBlockEnd: "15px"
    },
    noteArea: {
        paddingLeft: "20px",
        paddingRight: "20px",
        marginTop: "20px"
    },
    selectArea: {
        paddingLeft: "20px",
        paddingRight: "20px",
        marginTop: "20px",
        marginBottom: "40px"
    },
    pageNumberStyle: {
        marginTop: "16px"
    },
    colorGrid: {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
    },
    colorSize: {
        fontSize: "30px"
    },
    popoverGrid: {
        width: "250px"
    }
}))


export default TakeNoteAreaStyle;