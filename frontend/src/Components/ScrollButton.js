import React, {useState} from 'react';
import {Fab} from "@material-ui/core";
import EjectIcon from '@material-ui/icons/Eject';
import ScrollButtonStyles from "../Styles/ScrollButtonStyles";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)
    const classes = ScrollButtonStyles();
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 250) {
            setVisible(true)
        } else if (scrolled <= 250) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Fab className={classes.fabStyle} onClick={scrollToTop} color={"primary"} size={"large"} style={{display: visible ? 'flex' : 'none'}}>
            <EjectIcon fontSize={"large"} />
        </Fab>
    );
}

export default ScrollButton;
