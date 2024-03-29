import React, {useEffect} from "react";
import clsx from "clsx";
import AppDetailedContentStyle from "../Styles/AppDetailedContentStyle";
import {useSelector} from "react-redux";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {Grid} from "@material-ui/core";
import StickyNote from "./StickyNote";
import TakeNoteArea from "./TakeNoteArea";
import axios from "axios";

export default function AppDetailedContent(props) {
    const classes = AppDetailedContentStyle();
    const leftMenuOpenState = useSelector(state => state.app.leftMenuOpenState);
    const notesListPreview = useSelector(state => state.app.notesListPreview);
    const [savedNoteList, setSavedNoteList] = React.useState([]);
    useEffect(() => {
        handleGetAllSavedNote()
    }, [])

    const handleGetAllSavedNote = () => {
        axios.get('/notes/getSavedNoteList').then(function (response) {
            setSavedNoteList(response.data);
        }).catch(function (error) {
            console.log(error)
        });
    }
    const handleNotesPreview = () => {
        if (notesListPreview && savedNoteList.length !== 0) {
            return (
                <ResponsiveMasonry
                    columnsCountBreakPoints={{250: 1, 500: 2, 750: 3, 1000: 4, 1250: 5, 1500: 6, 1750: 7}}
                >
                    <Masonry>
                        {savedNoteList.map((note) => {
                            return (
                                <StickyNote color={note.color}
                                            note={note.noteContent}
                                            pageNumber={note.pageNumber}
                                            noteId={note.id}
                                />
                            )
                        })}
                    </Masonry>
                </ResponsiveMasonry>
            )
        } else {
            return (
                <Grid container spacing={2}>
                    <Grid item lg={4} md={3} sm={2} xs={0}/>
                    <Grid item lg={4} md={6} sm={8} xs={12}>
                        {savedNoteList.length !== 0 && savedNoteList.map((item) => {
                            return (
                                <StickyNote color={item.color}
                                            note={item.noteContent}
                                            pageNumber={item.pageNumber}
                                            noteId={item.id}
                                />
                            )
                        })}
                    </Grid>
                    <Grid item lg={4} md={3} sm={2} xs={0}/>
                </Grid>
            )
        }
    }

    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: leftMenuOpenState,
                [classes.mainBlur]: leftMenuOpenState
            })}
        >
            <TakeNoteArea handleGetAllSavedNote={handleGetAllSavedNote}/>
            {handleNotesPreview()}
        </main>
    );

}