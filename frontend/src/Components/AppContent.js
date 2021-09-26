import React from "react";
import {Grid} from "@material-ui/core";
import LeftMenu from "./LeftMenu";

export default function AppContent(props) {
    return (
        <Grid container>
            <Grid item xs={1}>
                <LeftMenu/>
            </Grid>
            <Grid item xs={11}>
            </Grid>
        </Grid>
    );
}
