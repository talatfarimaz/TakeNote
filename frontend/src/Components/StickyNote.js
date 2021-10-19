import {CardActionArea, Grid, Typography} from "@material-ui/core";
import React from "react";
import StickyNoteStyle from "../Styles/StickyNoteStyle";
import AccountCircle from "@material-ui/icons/AccountCircle";
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
        <CardActionArea >
            <Grid container className={classes.contentGrid}>
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
                                aria-label="account of current user"
                                aria-controls="primary-search-account-menu"
                                aria-haspopup="true"
                                color="inherit"
                                size={"small"}
                                onClick={event => {
                                    event.stopPropagation();
                                    event.preventDefault();
                                    console.log("Button clicked");
                                }}
                            >
                                <AccessAlarmIcon fontSize={"small"}/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} className={classes.iconButtons}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="primary-search-account-menu"
                                aria-haspopup="true"
                                color="inherit"
                                size={"small"}

                            >
                                <ArchiveIcon fontSize={"small"}/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} className={classes.iconButtons}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="primary-search-account-menu"
                                aria-haspopup="true"
                                color="inherit"
                                size={"small"}

                            >
                                <ImageIcon fontSize={"small"}/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} className={classes.iconButtons}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="primary-search-account-menu"
                                aria-haspopup="true"
                                color="inherit"
                                size={"small"}

                            >
                                <FormatPaintIcon fontSize={"small"}/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} className={classes.iconButtons}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="primary-search-account-menu"
                                aria-haspopup="true"
                                color="inherit"
                                size={"small"}

                            >
                                <PersonAddIcon fontSize={"small"}/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={2} className={classes.iconButtons}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="primary-search-account-menu"
                                aria-haspopup="true"
                                color="inherit"
                                size={"small"}

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