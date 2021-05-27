import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import log from "img/test.png";
import { makeStyles } from "@material-ui/core/styles";
import Test from "views/Test";

const useStyles = makeStyles(() => ({
  sideBar: {
    position: "fixed",
    width: "80px",
    height: "100%",
    left: "0px",
    backgroundColor: "rgb(30,30,30)",
    borderStyle: "none solid none none",
    border: "rgb(100,100,100)",
    zIndex: "2000",
  },
  marginSpace: {
    marginLeft: "70px",
    height: "100%",
  },
  iconSize: {
    width: "60px",
    margin: "5px",
  },
}));

function Navi() {
  const classes = useStyles();
  return (
    <div className={classes.sideBar}>
      <div>
        <Link to="/">
          <img className={classes.iconSize} src={log} alt="{alt}"></img>
        </Link>
      </div>
      <div>
        <Route path="/Test" component={Test} />
      </div>
    </div>
  );
}
export default Navi;