import {
    Button,
    ClickAwayListener,
    Divider,
    Grid,
    InputBase,
    Paper, Popover,
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
import {Notification} from "../Modals/Notification";
import NotificationTypes from "../enums/NotificationTypes";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";


export default function TakeNoteArea(props) {
    const classes = TakeNoteAreaStyle();
    const {t} = useTranslation();
    const [openDetail, setOpenDetail] = React.useState(false);
    const [redo, setRedo] = React.useState(true);
    const [undo, setUndo] = React.useState(true);
    const [color, setColor] = React.useState(DefaultTheme.palette.success.contrastText);
    const [category, setCategory] = React.useState([]);
    const [book, setBook] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(null);
    const childRefNote = useRef();
    const duration = 1000;
    const [note, setNote] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [bookList, setBookList] = React.useState([]);
    useEffect(() => {
        axios.get('/books/getBookList').then(function (response) {
            setBookList(response.data);
        }).catch(function (error) {
            console.log(error)
        });
    }, [])
    const [categoryList, setCategoryList] = React.useState([]);
    useEffect(() => {
        axios.get('/categories/getCategoryList').then(function (response) {
            setCategoryList(response.data);
        }).catch(function (error) {
            console.log(error)
        });
    }, [])
    const childRef = useRef();
    const handleClickPopover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const handleOpenColorSelector = (event) => {
        childRef.current.handleClickOpenWithRef();
    };
    const handleOnChangeTakeNote = () => {
        setOpenDetail(true);
    }
    const handleSetCategory = (event, values) => {
        setCategory(values);
    }
    const handleClose = () => {
        setNote(null);
        setBook(null);
        setCategory([]);
        setColor(null);
        setPageNumber(null);
    };
    const handleGetJsonData = (categoryIdList) =>{
        return {
            "noteContent": note,
            "noteMapBook": book.id,
            "noteMapCategory": categoryIdList,
            "color": color,
            "pageNumber": pageNumber
        };
    }
    const handleSaveNote = () => {
        if (note !== null) {
            if (book !== null) {
                if (category.length !== 0) {
                    if (pageNumber !== null) {
                        var categoryIdList = [];
                        category.map((categ) => {
                            categoryIdList.push(categ.id)
                        });
                        axios.post('notes/addNote',
                            handleGetJsonData(categoryIdList)
                        ).then(function (response) {
                            props.handleGetAllSavedNote();
                            childRefNote.current.handleClickOpenWithRef(duration, t('SuccessMessage'), NotificationTypes.success);
                            setTimeout(function () {
                                handleClose();
                            }, duration);
                        }).catch(function (error) {
                            childRefNote.current.handleClickOpenWithRef(duration, t('ErrorMessage'), NotificationTypes.error);
                        });
                        setOpenDetail(false)
                    } else {
                        childRefNote.current.handleClickOpenWithRef(duration, t('NullValueCheck', {value: t('Page')}), NotificationTypes.warning);
                    }
                } else {
                    childRefNote.current.handleClickOpenWithRef(duration, t('NullValueCheck', {value: t('Category')}), NotificationTypes.warning);
                }
            } else {
                childRefNote.current.handleClickOpenWithRef(duration, t('NullValueCheck', {value: t('Book')}), NotificationTypes.warning);
            }
        } else {
            childRefNote.current.handleClickOpenWithRef(duration, t('NullValueCheck', {value: t('Note')}), NotificationTypes.warning);
        }
    }
    const handleCloseDetail = () => {
        setOpenDetail(false);
        handleClose();
    }
    const ColorList =
        [DefaultTheme.palette.primary.mainAlternative, DefaultTheme.palette.dark.mainAlternative,
            DefaultTheme.palette.secondary.mainAlternative, DefaultTheme.palette.primary.lightAlternative,
            DefaultTheme.palette.link.light, DefaultTheme.palette.purple.main,
            DefaultTheme.palette.default.mainLight, DefaultTheme.palette.indigo.main,
            DefaultTheme.palette.teal.main, DefaultTheme.palette.green.main,
            DefaultTheme.palette.orange.main, DefaultTheme.palette.yellow.main]
    const handleGetColors = () => {
        return (
            ColorList.map((color) =>
                <Grid item xs={2} className={classes.colorGrid}>
                    <IconButton
                        color="inherit"
                        size={"medium"}
                        onClick={(event) => {
                            setColor(color);
                            handleClosePopover();
                        }}
                    >
                        <FiberManualRecordIcon style={{color: color}} className={classes.colorSize}/>
                    </IconButton>
                </Grid>
            )
        )
    }
    const handleGetDetailedNoteArea = () => {
        if (openDetail) {
            return (
                <ClickAwayListener onClickAway={handleCloseDetail}>
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
                                    value={note}
                                    maxRows={10}
                                    onChange={(event) => {
                                        setNote(event.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item sm={4} xs={12} className={classes.selectArea}>
                                <Autocomplete
                                    options={bookList}
                                    getOptionLabel={(option) => option.bookName}
                                    onChange={(event, value) => {
                                        setBook(value)
                                    }}
                                    renderInput={(params) =>
                                        <TextField {...params} label={t('SelectBook')} variant={"standard"}/>}
                                />
                            </Grid>
                            <Grid item sm={4} xs={12} className={classes.selectArea}>
                                <Autocomplete
                                    multiple
                                    id="tags-standard"
                                    options={categoryList}
                                    getOptionLabel={(option) => option.categoryName}
                                    onChange={handleSetCategory}
                                    filterSelectedOptions
                                    renderInput={(params) => <TextField {...params} label={t('SelectCategory')}
                                                                        variant={"standard"}/>}
                                />
                            </Grid>
                            <Grid item sm={4} xs={12} className={classes.selectArea}>
                                <TextField
                                    className={classes.pageNumberStyle}
                                    placeholder={t('EnterPage')}
                                    inputProps={{'aria-label': t('EnterPage')}}
                                    value={pageNumber}
                                    onChange={(event) => {
                                        setPageNumber(event.target.value)
                                    }}
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.iconsArea}>
                                <Grid container spacing={1}>
                                    <Grid item sm={1} xs={2} className={classes.iconButtons}>
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
                                    <Grid item sm={1} xs={2} className={classes.iconButtons}>
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
                                    <Grid item sm={1} xs={2} className={classes.iconButtons}>
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
                                    <Grid item sm={1} xs={2} className={classes.iconButtons}>
                                        <Tooltip title={t('ColorSelect')}>
                                            <IconButton
                                                color="inherit"
                                                size={"small"}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    event.preventDefault();
                                                    handleClickPopover(event);
                                                }}
                                            >
                                                <FormatPaintIcon fontSize={"small"}/>
                                            </IconButton>
                                        </Tooltip>
                                        <Popover
                                            open={open}
                                            anchorEl={anchorEl}
                                            onClose={handleClosePopover}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'center',
                                            }}
                                        >
                                            <Grid container className={classes.popoverGrid}>
                                                {handleGetColors()}
                                            </Grid>
                                        </Popover>
                                    </Grid>
                                    <Grid item sm={1} xs={2} className={classes.iconButtons}>
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
                                    <Grid item sm={1} xs={2}className={classes.iconButtons}>
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
                                    <Grid item sm={1} xs={2} className={classes.iconButtons}>
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
                                    <Grid item sm={1} xs={2}className={classes.iconButtons}>
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
                                    <Grid item sm={2} xs={4} className={classes.cancelButton}>
                                        <Button onClick={handleSaveNote}>
                                            <Typography className={classes.cancelButtonText}>
                                                {t('Save')}
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item sm={2} xs={4}className={classes.cancelButton}>
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
            <Notification ref={childRefNote} duration={duration}/>
        </Grid>
    );

}