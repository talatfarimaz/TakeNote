import {makeStyles} from "@material-ui/core/styles";

const AppContentStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        [theme.breakpoints.only('xs')]: {
            display: 'unset',
        },
    },
}))

export default AppContentStyle;
