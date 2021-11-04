import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import AddBookModalStyle from "../Styles/AddBookModalStyle";
import {useTranslation} from "react-i18next";
import {FormControl, TextField} from "@material-ui/core";
import axios from "axios";
import DialogTitle from "./DialogTitle";
import NotificationTypes from "../enums/NotificationTypes";
import {Notification} from "./Notification";

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

export const AddCategoryModal = forwardRef((props, ref) => {
    useImperativeHandle(
        ref,
        () => ({
            handleClickOpenWithRef() {
                setOpen(true);
            }
        }),
    )
    const [open, setOpen] = React.useState(false);
    const [categoryName, setCategoryName] = React.useState(null);
    const {t} = useTranslation();
    const classes = AddBookModalStyle();
    const childRefBook = useRef();
    const duration = 2000;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCategoryName(null);
    };

    const handleSaveCategory = () => {
        if (categoryName !== null) {
            axios.post('/categories/addCategory', {
                category: categoryName
            }).then(function (response) {
                childRefBook.current.handleClickOpenWithRef(duration, t('SuccessMessage'), NotificationTypes.success);
                setTimeout(function () {
                    handleClose();
                }, duration);
            }).catch(function (error) {
                childRefBook.current.handleClickOpenWithRef(duration, t('ErrorMessage'), NotificationTypes.error);
                setTimeout(function () {
                    setOpen(false)
                }, duration);
            });
        } else {
            childRefBook.current.handleClickOpenWithRef(duration, t('NullValueCheck', {value: t('Book')}), NotificationTypes.warning);
        }
    }

    const handleChange = (event) => {
        setCategoryName(event.target.value);
    };
    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" maxWidth={"sm"} fullWidth={true}
                open={open} classes={{paperFullWidth: classes.paperFullWidth, paper: classes.paperFullWidthMargin}}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                {t('AddCategory')}
            </DialogTitle>
            <DialogContent dividers>
                <FormControl variant="outlined" className={classes.addBookArea}>
                    <TextField type={"text"} value={categoryName} id="outlined-basic" label={t('CategoryName')}
                               variant="outlined" onChange={handleChange}/>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleSaveCategory} color="primary" variant={"contained"}>
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
            <Notification ref={childRefBook} duration={duration}/>
        </Dialog>
    );
})

