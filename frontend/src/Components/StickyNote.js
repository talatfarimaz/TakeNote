import {CardActionArea, Grid, Paper, Tooltip, Typography} from "@material-ui/core";
import React, {useRef} from "react";
import StickyNoteStyle from "../Styles/StickyNoteStyle";
import IconButton from "@material-ui/core/IconButton";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import FormatPaintIcon from '@material-ui/icons/FormatPaint';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from "@material-ui/icons/Archive";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import GpsFixedSharpIcon from '@material-ui/icons/GpsFixedSharp';
import {ColorSelectorModal} from "../Modals/ColorSelectorModal";
import {useTranslation} from "react-i18next";
import {NoteDetailModal} from "../Modals/NoteDetailModal";

export default function StickyNote(props) {
    const classes = StickyNoteStyle();
    const childColorRef = useRef();
    const childNoteRef = useRef();
    const {t} = useTranslation();
    const handleOpenColorSelector = (event) => {
        childColorRef.current.handleClickOpenWithRef();
    };
    const handleClickOpenNoteDetailModal = () => {
        childNoteRef.current.handleClickOpenWithRef(props.note, props.color, props.noteId, props.pageNumber);

    }
    return (
        <Paper className={classes.stickyPadding} style={{background: props.color}}>
            <CardActionArea onClick={() => {
                handleClickOpenNoteDetailModal()
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
                        <Typography className={classes.noteStyle}>{props.note}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={2} className={classes.iconButtons}>
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
                            <Grid item xs={2} className={classes.iconButtons}>
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
                            <Grid item xs={2} className={classes.iconButtons}>
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
                            <Grid item xs={2} className={classes.iconButtons}>
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
                            <Grid item xs={2} className={classes.iconButtons}>
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
                            <Grid item xs={2} className={classes.iconButtons}>
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
                        </Grid>
                    </Grid>
                </Grid>
            </CardActionArea>
            <ColorSelectorModal ref={childColorRef}/>
            <NoteDetailModal ref={childNoteRef}/>
        </Paper>
    );

}