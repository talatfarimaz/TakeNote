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
import {FormControl, TextField} from "@material-ui/core";
import axios from "axios";

const DialogTitle = ((props) => {
    const {children, onClose, ...other} = props;
    const classes = AddBookModalStyle();
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCategoryName(null);
    };

    const handleSaveBook = () => {
        axios.post('/categories', {
            bookName: categoryName
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const handleChange = (event) => {
        setCategoryName(event.target.value);
    };
    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" maxWidth={"sm"} fullWidth={true}
                open={open}>
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

