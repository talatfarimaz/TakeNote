import React from "react";
import LeftMenu from "./LeftMenu";
import AppContentStyle from "../Styles/AppContentStyle";
import AppDetailedContent from "./AppDetailedContent";

export default function AppContent(props) {
    const classes = AppContentStyle();
    return (
        <div className={classes.root}>
            <LeftMenu/>
            <AppDetailedContent/>
        </div>
    );
}
