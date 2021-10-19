import {CardActionArea, Grid, Typography} from "@material-ui/core";
import React from "react";
import StickyNoteStyle from "../Styles/StickyNoteStyle";
import IconButton from "@material-ui/core/IconButton";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import FormatPaintIcon from '@material-ui/icons/FormatPaint';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from "@material-ui/icons/Archive";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default function StickyNote(props) {
    const classes = StickyNoteStyle();

    return (
        <div className={classes.stickyPadding}>
            <CardActionArea>
                <Grid container className={classes.contentGrid} spacing={2}>
                    <Grid item xs={12}>
                        <Typography>DenemeDeneme</Typography>
                        <Typography>Deneme</Typography>
                        <Typography>DenemeDenemeDeneme</Typography>
                        <Typography>Deneme</Typography>
                        <Typography>DenDenemeeme</Typography>
                        <Typography>DenDenemeeme</Typography>
                        <Typography>{props.note}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={2} className={classes.iconButtons}>
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
                            </Grid>
                            <Grid item xs={2} className={classes.iconButtons}>
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
                            </Grid>
                            <Grid item xs={2} className={classes.iconButtons}>
                                <IconButton
                                    color="inherit"
                                    size={"small"}
                                    onClick={event => {
                                        event.stopPropagation();
                                        event.preventDefault();
                                           alert("Button clicked");
                                    }}
                                >
                                    <ImageIcon fontSize={"small"}/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={2} className={classes.iconButtons}>
                                <IconButton
                                    color="inherit"
                                    size={"small"}
                                    onClick={event => {
                                        event.stopPropagation();
                                        event.preventDefault();
                                        alert("Button clicked");
                                    }}
                                >
                                    <FormatPaintIcon fontSize={"small"}/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={2} className={classes.iconButtons}>
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
                            </Grid>
                            <Grid item xs={2} className={classes.iconButtons}>
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
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </CardActionArea>
        </div>
    );

}