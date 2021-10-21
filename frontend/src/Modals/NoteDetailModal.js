import React, {forwardRef, useImperativeHandle} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AddBookModalStyle from "../Styles/AddBookModalStyle";
import {useTranslation} from "react-i18next";
import {DialogTitle, FormControl, TextField} from "@material-ui/core";
import axios from "axios";
import NoteDetailModalStyle from "../Styles/NoteDetailModalStyle";



const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export const NoteDetailModal = forwardRef((props, ref) => {
    useImperativeHandle(
        ref,
        () => ({
            handleClickOpenWithRef() {
                setOpen(true);
            }
        }),
    )
    const [open, setOpen] = React.useState(false);
    const {t} = useTranslation();
    const classes = NoteDetailModalStyle();


    const handleClose = () => {
        setOpen(false);
    };

    const handleSaveBook = () => {
        axios.post('/books', {
            bookName: "bookName"
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" maxWidth={"sm"} fullWidth={true}
                open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                {t('AddBook')}
            </DialogTitle>
            <DialogContent dividers>
                <FormControl variant="outlined" >
                    <TextField type={"text"} id="outlined-basic" label={t('BookName')}
                               variant="outlined" />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleSaveBook} color="primary" variant={"contained"}>
                    <Typography>
                        {t('Save')}
                    </Typography>
                </Button>
                <Button autoFocus onClick={handleClose} color="primary" variant={"contained"}>
                    <Typography>
                        {t('Cancel')}
                    </Typography>
                </Button>
            </DialogActions>
        </Dialog>
    );
})

