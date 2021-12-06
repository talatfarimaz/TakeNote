import React, {useEffect} from "react";
import clsx from "clsx";
import AppDetailedContentStyle from "../Styles/AppDetailedContentStyle";
import {useSelector} from "react-redux";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {Grid} from "@material-ui/core";
import StickyNote from "./StickyNote";
import TakeNoteArea from "./TakeNoteArea";
import DefaultTheme from "../Themes/DefaultTheme";
import axios from "axios";

const strings = ["jkjfhjdskhfjkhdjhfjksdhfjk\n\nghgdsahsdahdshghdgshdg\n\nghgdsahsdahdshghdgshdg\n\nghgdsahsdahdshghdgshdg", "jkjfhjdskhfjkhdjhfjksdhfjk\n\nghgdsahsdahdshghdgshdg", "jkjfhjdskhfjkhdjhfjksdhfjk\n\nghgdsahsdahdshghdgshdg", "jkjfhjdskhfjdkhdjhfjksdhfjk\n\nghgdsahsdahddddshghdgshdg", "jkjfhjdskhdsdsfjkhdjhfjksdhfjk\n\nghgdsahsdahdshghdgshdg", "jkjfhjdskhfjkhdjhfjksdhfjk\n\nghgdsahsdahdshghdgshdg"]

const ColorList =
    [DefaultTheme.palette.primary.mainAlternative, DefaultTheme.palette.dark.mainAlternative,
        DefaultTheme.palette.secondary.mainAlternative, DefaultTheme.palette.primary.lightAlternative,
        DefaultTheme.palette.link.light, DefaultTheme.palette.purple.main,
        DefaultTheme.palette.default.mainLight, DefaultTheme.palette.indigo.main,
        DefaultTheme.palette.teal.main, DefaultTheme.palette.green.main,
        DefaultTheme.palette.orange.main, DefaultTheme.palette.yellow.main]

export default function AppDetailedContent(props) {
    const classes = AppDetailedContentStyle();
    const leftMenuOpenState = useSelector(state => state.app.leftMenuOpenState);
    const notesListPreview = useSelector(state => state.app.notesListPreview);
    const [savedNoteList, setSavedNoteList] = React.useState([]);
    useEffect(() => {
        axios.get('/notes/getSavedNoteList').then(function (response) {
            setSavedNoteList(response.data);
        }).catch(function (error) {
            console.log(error)
        });
    }, [])

    const handleNotesPreview = () => {
        if (notesListPreview) {
            return (
                <ResponsiveMasonry
                    columnsCountBreakPoints={{250: 1, 500: 2, 750: 3, 1000: 4, 1250: 5, 1500: 6, 1750: 7}}
                >
                    <Masonry>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 5, 4, 4, 3, 5, 6, 7, 8, 5, 4, 4, 3, 5, 6, 7, 8, 5, 4, 4, 3, 5, 6, 7, 8, 5, 4, 4, 3].map((item) => {
                            return (
                                <StickyNote color={ColorList[Math.floor(Math.random() * ColorList.length)]}
                                            note={strings[Math.floor(Math.random() * strings.length)]}/>
                            )
                        })}
                        <StickyNote/>
                    </Masonry>
                </ResponsiveMasonry>
            )
        } else {
            return (
                <Grid container spacing={2}>
                    <Grid item lg={4} md={3} sm={2} xs={0}/>
                    <Grid item lg={4} md={6} sm={8} xs={12}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 5, 4, 4, 3, 5, 6, 7, 8, 5, 4, 4, 3, 5, 6, 7, 8, 5, 4, 4, 3, 5, 6, 7, 8, 5, 4, 4, 3].map((item) => {
                            return (
                                <StickyNote color={ColorList[Math.floor(Math.random() * ColorList.length)]}
                                            note={strings[Math.floor(Math.random() * strings.length)]}/>
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
            <TakeNoteArea/>
            {handleNotesPreview()}
        </main>
    );

}