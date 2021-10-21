import React, {forwardRef, useImperativeHandle} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {useTranslation} from "react-i18next";
import {Grid} from "@material-ui/core";
import axios from "axios";
import DialogTitle from "./DialogTitle";
import ColorSelectorModalStyle from "../Styles/ColorSelectorModalStyle";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DefaultTheme from "../Themes/DefaultTheme";

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

const ColorList =
    [DefaultTheme.palette.primary.mainAlternative, DefaultTheme.palette.dark.mainAlternative,
        DefaultTheme.palette.secondary.mainAlternative, DefaultTheme.palette.primary.light,
        DefaultTheme.palette.link.light, DefaultTheme.palette.purple.main,
        DefaultTheme.palette.success.contrastText, DefaultTheme.palette.indigo.main,
        DefaultTheme.palette.teal.main, DefaultTheme.palette.green.main,
        DefaultTheme.palette.orange.main, DefaultTheme.palette.yellow.main]

export const ColorSelectorModal = forwardRef((props, ref) => {
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
    const classes = ColorSelectorModalStyle();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSaveBook = () => {
        axios.post('/books', {
            bookName: open
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const handleGetColors = () => {
        return (
            ColorList.map((color) =>
                <Grid item xs={2} className={classes.colorGrid}>
                    <IconButton
                        color="inherit"
                        size={"medium"}
                        onClick={(event) => {
                            event.stopPropagation();
                            event.preventDefault();
                        }}
                    >
                        <FiberManualRecordIcon style={{color: color}} className={classes.colorSize}/>
                    </IconButton>
                </Grid>
            )
        )
    };
    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" fullWidth={false}
                open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                {t('SelectColor')}
            </DialogTitle>
            <DialogContent dividers>
                <Grid container>
                    {handleGetColors()}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary" variant={"contained"}>
                    <Typography>
                        {t('Cancel')}
                    </Typography>
                </Button>
            </DialogActions>
        </Dialog>
    );
})

