import {Divider, Grid, InputBase, Paper, TextField} from "@material-ui/core";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {useTranslation} from "react-i18next";
import TakeNoteAreaStyle from "../Styles/TakeNoteAreaStyle";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ImageIcon from "@material-ui/icons/Image";
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

export default function TakeNoteArea(props) {
    const classes = TakeNoteAreaStyle();
    const {t} = useTranslation();
    const [openDetail, setOpenDetail] = React.useState(false);
    const handleOnChangeTakeNote = () => {
        setOpenDetail(true);
    }
    const handleGetDetailedNoteArea = () => {
        if (openDetail) {
            return (
                <Paper component="form" className={classes.root}>
                    <TextField
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
                    <Divider className={classes.divider} orientation="vertical"/>
                    <IconButton color="primary" className={classes.iconButton} aria-label="search">
                        <ImageIcon/>
                    </IconButton><Divider className={classes.divider} orientation="vertical"/>
                    <IconButton color="primary" className={classes.iconButton} aria-label="search">
                        <ImageIcon/>
                    </IconButton>
                </Paper>
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
        </Grid>
    );

}