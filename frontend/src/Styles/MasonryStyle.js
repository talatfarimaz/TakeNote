import {makeStyles} from "@material-ui/core/styles";

const MasonryStyle = makeStyles(theme => ({
    my_masonry_grid: {
        "display": "flex",
        "marginLeft": "-30px",
        "width": "auto"
    },
    my_masonry_grid_column: {
        "paddingLeft": "30px",
        "backgroundClip": "padding-box"
    },
    my_masonry_grid_column___div: {
        "background": "grey",
        "marginBottom": "30px"
    }

}));

export default MasonryStyle();