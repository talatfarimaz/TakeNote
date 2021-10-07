import {makeStyles} from "@material-ui/core/styles";

const AppContentStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        marginTop: "57px",
        [theme.breakpoints.only('xs')]: {
            display: 'grid',
        },
    },
}))

export default AppContentStyle;
