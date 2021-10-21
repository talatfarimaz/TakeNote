import React from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import AppDetailedContentStyle from "../Styles/AppDetailedContentStyle";
import {useSelector} from "react-redux";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {CardActionArea} from "@material-ui/core";
import StickyNote from "./StickyNote";
import TakeNoteArea from "./TakeNoteArea";
import DefaultTheme from "../Themes/DefaultTheme";
import {ColorSelectorModal} from "../Modals/ColorSelectorModal";


const strings = ["jkjfhjdskhfjkhdjhfjksdhfjk\n\nghgdsahsdahdshghdgshdg\n\nghgdsahsdahdshghdgshdg\n\nghgdsahsdahdshghdgshdg", "jkjfhjdskhfjkhdjhfjksdhfjk\n\nghgdsahsdahdshghdgshdg", "jkjfhjdskhfjkhdjhfjksdhfjk\n\nghgdsahsdahdshghdgshdg", "jkjfhjdskhfjdkhdjhfjksdhfjk\n\nghgdsahsdahddddshghdgshdg", "jkjfhjdskhdsdsfjkhdjhfjksdhfjk\n\nghgdsahsdahdshghdgshdg", "jkjfhjdskhfjkhdjhfjksdhfjk\n\nghgdsahsdahdshghdgshdg"]
const ColorList =
    [DefaultTheme.palette.primary.mainAlternative, DefaultTheme.palette.dark.mainAlternative,
        DefaultTheme.palette.secondary.mainAlternative, DefaultTheme.palette.primary.light,
        DefaultTheme.palette.link.light, DefaultTheme.palette.purple.main,
        DefaultTheme.palette.success.contrastText, DefaultTheme.palette.indigo.main,
        DefaultTheme.palette.teal.main, DefaultTheme.palette.green.main,
        DefaultTheme.palette.orange.main, DefaultTheme.palette.yellow.main];
export default function AppDetailedContent(props) {
    const classes = AppDetailedContentStyle();
    const leftMenuOpenState = useSelector(state => state.app.leftMenuOpenState);

    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: leftMenuOpenState,
                [classes.mainBlur]: leftMenuOpenState
            })}
        >
            <TakeNoteArea/>
            <ResponsiveMasonry
                columnsCountBreakPoints={{250: 1, 500: 2, 750: 3, 1000: 4, 1250: 5, 1500: 6, 1750: 7}}
            >
                <Masonry>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 5, 4, 4, 3, 5, 6, 7, 8, 5, 4, 4, 3, 5, 6, 7, 8, 5, 4, 4, 3, 5, 6, 7, 8, 5, 4, 4, 3].map((item) => {
                        return (
                            <StickyNote color={ColorList[Math.floor(Math.random() * ColorList.length)]} note={strings[Math.floor(Math.random() * strings.length)]}/>
                        )
                    })}
                    <StickyNote/>
                </Masonry>
            </ResponsiveMasonry>
        </main>
    );

}