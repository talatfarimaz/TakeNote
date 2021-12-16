import {makeStyles} from "@material-ui/core/styles";

const ScrollButtonStyles = makeStyles(theme => ({
  fabStyle : {
      position: "fixed",
      left: "90%",
      bottom: "40px",
      fontSize: "3rem",
      zIndex: 1,
      cursor: "pointer",
      [theme.breakpoints.only('xs')]: {
          left: "50%",
      }
  }
}))

export default ScrollButtonStyles;