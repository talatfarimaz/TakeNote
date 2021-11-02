import {
    Button,
    ClickAwayListener,
    Divider,
    Grid,
    InputBase,
    Paper,
    TextField,
    Tooltip,
    Typography
} from "@material-ui/core";
import React, {useEffect, useRef} from "react";
import IconButton from "@material-ui/core/IconButton";
import {useTranslation} from "react-i18next";
import TakeNoteAreaStyle from "../Styles/TakeNoteAreaStyle";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ImageIcon from "@material-ui/icons/Image";
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import GpsFixedSharpIcon from "@material-ui/icons/GpsFixedSharp";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ArchiveIcon from "@material-ui/icons/Archive";
import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import {ColorSelectorModal} from "../Modals/ColorSelectorModal";
import DefaultTheme from "../Themes/DefaultTheme";
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";
import NotificationTypes from "../enums/NotificationTypes";


export default function TakeNoteArea(props) {
    const classes = TakeNoteAreaStyle();
    const {t} = useTranslation();
    const [openDetail, setOpenDetail] = React.useState(false);
    const [redo, setRedo] = React.useState(true);
    const [undo, setUndo] = React.useState(true);
    const [color, setColor] = React.useState(DefaultTheme.palette.success.contrastText);
    const [category, setCategory] = React.useState(null);
    const [book, setBook] = React.useState(null);
    const [bookList, setBookList] = React.useState([]);
    useEffect(()=>{
        axios.get('/books/getBookList').then(function (response) {
            console.log(response)
        }).catch(function (error) {
           console.log(error)
        });
    })
    const childRef = useRef();
    const handleOpenColorSelector = (event) => {
        childRef.current.handleClickOpenWithRef();
    };
    const handleOnChangeTakeNote = () => {
        setOpenDetail(true);
    }
    const handleGetDetailedNoteArea = () => {
        if (openDetail) {
            return (
                <ClickAwayListener onClickAway={() => {
                    setOpenDetail(false)
                }}>
                    <Paper className={classes.detailedNoteArea} style={{background: color}}>
                        <Grid container className={classes.contentGrid}>
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
                            <Grid item xs={12} className={classes.noteArea}>
                                <TextField
                                    className={classes.textAreaStyle}
                                    placeholder={t('TakeNote')}
                                    inputProps={{'aria-label': t('TakeNote')}}
                                    onSelect={() => {
                                        handleOnChangeTakeNote()
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} className={classes.selectArea}>
                                <Autocomplete
                                    options={bookList}
                                    getOptionLabel={(option) => option.bookName}
                                    onChange={(event, value) => {setBook(value.bookName)}}
                                    renderInput={(params) => <TextField {...params} label={t('SelectBook')} variant={"standard"} />}
                                />
                            </Grid>
                            <Grid item xs={6} className={classes.selectArea}>
                                <Autocomplete
                                    options={bookList}
                                    getOptionLabel={(option) => option.bookName}
                                    renderInput={(params) => <TextField {...params} label={t('SelectCategory')} variant={"standard"} />}
                                />
                            </Grid>
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
                                        <Button onClick={() => {
                                            setOpenDetail(false)
                                        }}>
                                            <Typography className={classes.cancelButtonText}>
                                                {t('Cancel')}
                                            </Typography>
                                        </Button>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>

                    </Paper>
                </ClickAwayListener>
            )
        } else {
            return (
                <Paper component="form" className={classes.root}>
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
                </Paper>

            )
        }
    }
    return (
        <Grid container>
            <Grid item lg={4} md={3} sm={2} xs={0}/>
            <Grid item lg={4} md={6} sm={8} xs={12}>
                {handleGetDetailedNoteArea()}
            </Grid>
            <Grid item lg={4} md={3} sm={2} xs={0}/>
            <ColorSelectorModal ref={childRef} setColor={setColor}/>
        </Grid>
    );

}