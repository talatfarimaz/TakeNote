import {makeStyles} from "@material-ui/core/styles";

const ColorSelectorModalStyle = makeStyles((theme) => ({
    colorGrid: {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
    },
    colorSize: {
        fontSize: "50px"
    },
    paperFullWidth: {
        width: "100%"
    },
    paperFullWidthMargin: {
        margin: "unset"
    }
}));

export default ColorSelectorModalStyle;