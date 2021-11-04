import AppContentStyle from "../Styles/AppContentStyle";
import React, {forwardRef, useImperativeHandle} from "react";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

export const Notification = forwardRef((props, ref) => {
    useImperativeHandle(
        ref,
        () => ({
            handleClickOpenWithRef(duration, message, severity) {
                setOpen(true);
                setDuration(duration);
                setMessage(message);
                setSeverity(severity);
            }
        }),
    )
    const [open, setOpen] = React.useState(false);
    const [duration, setDuration] = React.useState(2000);
    const [message, setMessage] = React.useState("");
    const [severity, setSeverity] = React.useState("");
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
            autoHideDuration={duration}
            anchorOrigin={{vertical, horizontal}}
            open={open}
            key={vertical + horizontal}
        >
            <Alert onClose={() => {
                setOpen(false)
            }} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    );
})
