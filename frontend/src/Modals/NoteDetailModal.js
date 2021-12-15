import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {useTranslation} from "react-i18next";
import {Chip, ClickAwayListener, Divider, Grid, InputBase, TextField, Tooltip} from "@material-ui/core";
import axios from "axios";
import NoteDetailModalStyle from "../Styles/NoteDetailModalStyle";
import GpsFixedSharpIcon from "@material-ui/icons/GpsFixedSharp";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ArchiveIcon from "@material-ui/icons/Archive";
import ImageIcon from "@material-ui/icons/Image";
import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import DefaultTheme from "../Themes/DefaultTheme";
import {ColorSelectorModal} from "./ColorSelectorModal";
import DialogTitle from "./DialogTitle";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AttachFileIcon from '@material-ui/icons/AttachFile';


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
            handleClickOpenWithRef(note, color, noteId, pageNumber) {
                setOpen(true);
                setColor(color);
                setNoteDetail(note);
                setOpenDetail(true);
                setPageNumber(pageNumber);
                setNoteId(noteId);
                handleSetNoteOtherDetail(noteId);
            }
        }),
    )
    const [open, setOpen] = React.useState(false);
    const [color, setColor] = React.useState(DefaultTheme.palette.success.contrastText);
    const [noteDetail, setNoteDetail] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(null);
    const [noteId, setNoteId] = React.useState(null);
    const [noteOtherDetail, setNoteOtherDetail] = React.useState(null);

    const classes = NoteDetailModalStyle();
    const handleClose = () => {
        setOpen(false);
    };
    const {t} = useTranslation();
    const [openDetail, setOpenDetail] = React.useState(false);
    const [redo, setRedo] = React.useState(true);
    const [undo, setUndo] = React.useState(true);
    const childRef = useRef();
    const handleOpenColorSelector = (event) => {
        childRef.current.handleClickOpenWithRef();
    };
    const handleSetNoteOtherDetail = (id) => {
        if (id !== null) {
            axios.get('/notes/getNoteDetail/' + id).then(function (response) {
                setNoteOtherDetail(response.data);
            }).catch(function (error) {
                console.log(error)
            });
        }
    }
    const handleOnChangeTakeNote = () => {
        setOpenDetail(true);
    }
    const handleSaveBook = () => {
        axios.post('/books', {
            bookName: "bookName"
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
    const handleGetNoteCategories = () => {
        if (noteOtherDetail !== null) {
            return(
                noteOtherDetail.categoryDTOList.map((category) => {
                    return(<Chip className={classes.chipStyle} icon={<AttachFileIcon/>} color={"secondary"} label={category.categoryName}/> )
                })
            )

        }
    }
    const handleGetDetailedNoteArea = () => {
        if (openDetail) {
            return (
                <ClickAwayListener onClickAway={() => {
                    setOpenDetail(false)
                }}>
                    <Grid container className={classes.contentGrid} spacing={2}>
                        <Grid item xs={12} className={classes.pinButton}>
                            <Tooltip title={t('Pin')}>
                                <IconButton
                                    color="inherit"
                                    size={"small"}
                                    onClick={event => {
                                        event.stopPropagation();
                                        event.preventDefault();
                                        alert("Button clicked");
                                    }}
                                >
                                    <GpsFixedSharpIcon fontSize={"small"}/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                className={classes.textAreaStyle}
                                placeholder={t('TakeNote')}
                                inputProps={{'aria-label': t('TakeNote')}}
                                onSelect={() => {
                                    handleOnChangeTakeNote()
                                }}
                            >
                                {noteDetail}
                            </Typography>
                            <Divider variant={"fullWidth"}/>
                            <Typography className={classes.bookDetail}>{noteOtherDetail && (noteOtherDetail.bookDTO.bookName+" - "+pageNumber)}</Typography>
                            {handleGetNoteCategories()}

                        </Grid>
{/*
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={1} className={classes.iconButtons}>
                                    <Tooltip title={t('Reminder')}>
                                        <IconButton
                                            color="inherit"
                                            size={"small"}
                                            onClick={event => {
                                                event.stopPropagation();
                                                event.preventDefault();
                                                alert("Button clicked");
                                            }}
                                        >
                                            <AccessAlarmIcon fontSize={"small"}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={1} className={classes.iconButtons}>
                                    <Tooltip title={t('ArchiveNote')}>
                                        <IconButton
                                            color="inherit"
                                            size={"small"}
                                            onClick={event => {
                                                event.stopPropagation();
                                                event.preventDefault();
                                                alert("Button clicked");
                                            }}
                                        >
                                            <ArchiveIcon fontSize={"small"}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={1} className={classes.iconButtons}>
                                    <Tooltip title={t('AddImage')}>
                                        <IconButton
                                            color="inherit"
                                            size={"small"}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                event.preventDefault();
                                                handleOpenColorSelector();
                                            }}
                                        >
                                            <ImageIcon fontSize={"small"}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={1} className={classes.iconButtons}>
                                    <Tooltip title={t('ColorSelect')}>
                                        <IconButton
                                            color="inherit"
                                            size={"small"}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                event.preventDefault();
                                                handleOpenColorSelector();
                                            }}
                                        >
                                            <FormatPaintIcon fontSize={"small"}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={1} className={classes.iconButtons}>
                                    <Tooltip title={t('CommonPerson')}>
                                        <IconButton
                                            color="inherit"
                                            size={"small"}
                                            onClick={event => {
                                                event.stopPropagation();
                                                event.preventDefault();
                                                alert("Button clicked");
                                            }}
                                        >
                                            <PersonAddIcon fontSize={"small"}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={1} className={classes.iconButtons}>
                                    <Tooltip title={t('Options')}>
                                        <IconButton
                                            color="inherit"
                                            size={"small"}
                                            onClick={event => {
                                                event.stopPropagation();
                                                event.preventDefault();
                                                alert("Button clicked");
                                            }}
                                        >
                                            <MoreVertIcon fontSize={"small"}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={1} className={classes.iconButtons}>
                                    <Tooltip title={t('Options')}>
                                        <IconButton
                                            color="inherit"
                                            size={"small"}
                                            onClick={event => {
                                                event.stopPropagation();
                                                event.preventDefault();
                                                alert("Button clicked");
                                            }}
                                            disabled={undo}
                                        >
                                            <UndoIcon fontSize={"small"}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={1} className={classes.iconButtons}>
                                    <Tooltip title={t('Options')}>
                                        <IconButton
                                            color="inherit"
                                            size={"small"}
                                            onClick={event => {
                                                event.stopPropagation();
                                                event.preventDefault();
                                                alert("Button clicked");
                                            }}
                                            disabled={redo}
                                        >
                                            <RedoIcon fontSize={"small"}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={4} className={classes.cancelButton}>
                                </Grid>

                            </Grid>
                        </Grid>
*/}
                    </Grid>
                </ClickAwayListener>
            )
        } else {
            return (
                <div className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder={t('TakeNote')}
                        inputProps={{'aria-label': t('TakeNote')}}
                        onSelect={() => {
                            handleOnChangeTakeNote()
                        }}
                    />
                    <IconButton color="primary" className={classes.iconButton} aria-label="search">
                        <FormatListNumberedIcon/>
                    </IconButton>
                    <Divider className={classes.divider} orientation="vertical"/>
                    <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                        <BorderColorIcon/>
                    </IconButton>
                    <Divider className={classes.divider} orientation="vertical"/>
                    <IconButton color="primary" className={classes.iconButton} aria-label="search">
                        <ImageIcon/>
                    </IconButton>
                </div>

            )
        }
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" maxWidth={"sm"}
                PaperProps={{style: {backgroundColor: color}}}
                classes={{paperFullWidth: classes.paperFullWidth, paper: classes.paperFullWidthMargin}} fullWidth={true}
                open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                {t('NoteTitle')}
            </DialogTitle>
            <DialogContent dividers>
                {handleGetDetailedNoteArea()}
            </DialogContent>
            <DialogActions>
            {/*    <Button autoFocus onClick={handleSaveBook} color="primary" variant={"contained"}>
                    <Typography>
                        {t('Save')}
                    </Typography>
                </Button>*/}
                <Button autoFocus onClick={handleClose} color="primary" variant={"contained"}>
                    <Typography>
                        {t('Close')}
                    </Typography>
                </Button>
            </DialogActions>
            <ColorSelectorModal ref={childRef} setColor={setColor}/>
        </Dialog>
    );
})

