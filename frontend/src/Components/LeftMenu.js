import React, {useRef} from 'react';
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
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import ClassIcon from '@material-ui/icons/Class';
import {AddBookModal} from "../Modals/AddBookModal";
import {AddCategoryModal} from "../Modals/AddCategoryModal";
import {Tooltip} from "@material-ui/core";

export default function LeftMenu(props) {
    const classes = LeftMenuStyle();
    const {t} = useTranslation();
    const leftMenuOpenState = useSelector(state => state.app.leftMenuOpenState);
    const childRefBook = useRef();
    const childRefCategory = useRef();

    const handleAddBook = (event) => {
        childRefBook.current.handleClickOpenWithRef();
    };
    const handleAddCategory = (event) => {
        childRefCategory.current.handleClickOpenWithRef();
    };
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer,
                {
                    [classes.drawerOpen]: leftMenuOpenState,
                    [classes.drawerClose]: !leftMenuOpenState,
                }
            )}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: leftMenuOpenState,
                    [classes.drawerClose]: !leftMenuOpenState,
                }),
            }}
        >
            <List>
                <ListItem button key={t('Notes')} className={classes.listItemIcon}>
                    <Tooltip title={t('Notes')}>
                        <ListItemIcon><NotesIcon/></ListItemIcon>
                    </Tooltip>
                    <ListItemText primary={t('Notes')}/>
                </ListItem>
                <ListItem button key={t('Reminders')} className={classes.listItemIcon}>
                    <Tooltip title={t('Reminders')}>
                        <ListItemIcon><AccessAlarmIcon /></ListItemIcon>
                    </Tooltip>
                    <ListItemText primary={t('Reminders')}/>
                </ListItem>
                <ListItem button key={t('Archive')} className={classes.listItemIcon}>
                    <Tooltip title={t('Archive')}>
                        <ListItemIcon><ArchiveIcon /></ListItemIcon>
                    </Tooltip>
                    <ListItemText primary={t('Archive')}/>
                </ListItem>
                <ListItem button key={t('AddBook')} onClick={() => {
                    handleAddBook()
                }} className={classes.listItemIcon}>
                    <Tooltip title={t('AddBook')}>
                        <ListItemIcon><CollectionsBookmarkIcon /></ListItemIcon>
                    </Tooltip>
                    <ListItemText primary={t('AddBook')}/>
                </ListItem>
                <ListItem button key={t('AddCategory')} onClick={() => {
                    handleAddCategory()
                }} className={classes.listItemIcon}>
                    <Tooltip title={t('AddCategory')}>
                        <ListItemIcon><ClassIcon /></ListItemIcon>
                    </Tooltip>
                    <ListItemText primary={t('AddCategory')}/>
                </ListItem>
                <ListItem button key={t('Rubbish')} className={classes.listItemIcon}>
                    <Tooltip title={t('Rubbish')}>
                        <ListItemIcon><DeleteSweepIcon/></ListItemIcon>
                    </Tooltip>
                    <ListItemText primary={t('Rubbish')}/>
                </ListItem>
            </List>
            <AddBookModal ref={childRefBook}/>
            <AddCategoryModal ref={childRefCategory}/>
        </Drawer>
    );
}
