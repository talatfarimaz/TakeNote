import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {useSelector} from 'react-redux';
import {useTranslation} from "react-i18next";
import NotesIcon from '@material-ui/icons/Notes';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import LeftMenuStyle from "../Styles/LeftMenuStyle";

export default function LeftMenu(props) {
    const classes = LeftMenuStyle();
    const {t} = useTranslation();
    const leftMenuOpenState = useSelector(state => state.app.leftMenuOpenState);

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: leftMenuOpenState,
                [classes.drawerClose]: !leftMenuOpenState,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: leftMenuOpenState,
                    [classes.drawerClose]: !leftMenuOpenState,
                }),
            }}
        >
            <List>
                <ListItem button key={t('Notes')} className={classes.listItemIcon}>
                    <ListItemIcon><NotesIcon color={"primary"} fontSize={"large"}/></ListItemIcon>
                    <ListItemText primary={t('Notes')}/>
                </ListItem>
                <ListItem button key={t('Reminders')} className={classes.listItemIcon}>
                    <ListItemIcon><AccessAlarmIcon color={"primary"} fontSize={"large"}/></ListItemIcon>
                    <ListItemText primary={t('Reminders')}/>
                </ListItem>
                <ListItem button key={t('Archive')} className={classes.listItemIcon}>
                    <ListItemIcon><ArchiveIcon color={"primary"} fontSize={"large"}/></ListItemIcon>
                    <ListItemText primary={t('Archive')}/>
                </ListItem>
                <ListItem button key={t('Rubbish')} className={classes.listItemIcon}>
                    <ListItemIcon><DeleteSweepIcon color={"primary"} fontSize={"large"}/></ListItemIcon>
                    <ListItemText primary={t('Rubbish')}/>
                </ListItem>
            </List>
        </Drawer>
    );
}
