import AppContentStyle from "../Styles/AppContentStyle";
import React, {forwardRef, useImperativeHandle} from "react";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

export const Notification = forwardRef((props, ref) => {
    useImperativeHandle(
        ref,
        () => ({
            handleClickOpenWithRef() {
                setOpen(true)
            }
        }),
    )
    const [open, setOpen] = React.useState(false);
    const classes = AppContentStyle();
    const [state, setState] = React.useState({
        vertical: 'top',
        horizontal: 'center',
    });

    const {vertical, horizontal} = state;

    const handleClick = (newState) => () => {
        setState({open: true, ...newState});
    };


    return (
        <Snackbar
            autoHideDuration={6000}
            anchorOrigin={{vertical, horizontal}}
            open={open}
            key={vertical + horizontal}
        >
            <Alert severity="success">This is an error message!</Alert>
        </Snackbar>
    );
})
