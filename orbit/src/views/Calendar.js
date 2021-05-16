import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import LoopIcon from "@material-ui/icons/Loop";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import FlagIcon from "@material-ui/icons/Flag";
import Box from "@material-ui/core/Box";
import LinkUI from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <LinkUI color="inherit" href="https://material-ui.com/">
        Your Website
      </LinkUI>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    overflow: "auto",
  },
  left: {
    display: "flex",
    flexFlow: "row wrap",
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
}));

const menuInfo = [
  { id: "Orbit", icon: <HomeIcon /> },
  { id: "Routine", icon: <LoopIcon /> },
  { id: "Calendar", icon: <CalendarTodayIcon /> },
  { id: "Challenge", icon: <FlagIcon /> },
];

function Calendar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            ORBIT
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>{theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
        </div>
        <Divider />
        <List>
          {menuInfo.map((menu, index) => (
            <div>
              <Link to={`/${menu.id}`}>
                <ListItem button key={menu.id}>
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.id} />
                </ListItem>
              </Link>
            </div>
          ))}
        </List>
      </Drawer>
      {/* ====================================================== */}
      {/* 여기에 해당 페이지의 메인컨텐츠 넣으시면 됩니다요오오오  */}
      {/* ====================================================== */}
      <Box pt={4}>
        <Copyright />
      </Box>
    </div>
  );
}
export default Calendar;
