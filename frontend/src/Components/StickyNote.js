import {CardActionArea, Grid, Tooltip, Typography} from "@material-ui/core";
import React, {useRef} from "react";
import StickyNoteStyle from "../Styles/StickyNoteStyle";
import IconButton from "@material-ui/core/IconButton";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import FormatPaintIcon from '@material-ui/icons/FormatPaint';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from "@material-ui/icons/Archive";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {ColorSelectorModal} from "../Modals/ColorSelectorModal";
import {useTranslation} from "react-i18next";

export default function StickyNote(props) {
    const classes = StickyNoteStyle();
    const childRef = useRef();
    const handleOpenColorSelector = (event) => {
        childRef.current.handleClickOpenWithRef();
    };
    const {t} = useTranslation();
    return (
        <div className={classes.stickyPadding}>
            <CardActionArea className={classes.stickyCardArea}>
                <Grid container className={classes.contentGrid} spacing={2}>
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
            <ColorSelectorModal ref={childRef}/>
        </div>
    );

}