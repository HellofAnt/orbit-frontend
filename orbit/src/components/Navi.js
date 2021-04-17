import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  sideBar: {
    position: "fixed",
    width: "70px",
    height: "100%",
    left: "0",
    backgroundColor: "brown",
    zIndex: "2000",
  },
  marginSpace: {
    marginLeft: "70px",
    height: "100%",
  },
}));

function Navi() {
  const classes = useStyles();
  return <div className={classes.sideBar}>test</div>;
}
export default Navi;
