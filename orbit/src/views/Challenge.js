import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import log from "img/test.png";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Orbit-Team
      </Link>{" "}
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
  ////////////////////////////////////
  nightMode: {
    backgroundColor: "rgb(30,30,30)",
    color: "white",
  },
  naviPadding: {
    paddingLeft: "80px",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  tagDiv: {
    paddingTop: "15px",
    display: "flex",
    justifyContent: "space-around",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    marginLeft: "70px",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  tagCard: {
    width: "70px",
    height: "70px",
    fontSize: "0.3em",
    paddingTop: "15px",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    filter: "grayscale(100)",
    backgroundSize: "contain",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

let cards = [];
let cardLength = 16;
for (let i = 0; i < cardLength; i++) {
  cards.push(i);
}

const menuInfo = [
  { id: "Orbit", icon: <HomeIcon /> },
  { id: "Routine", icon: <LoopIcon /> },
  { id: "Calendar", icon: <CalendarTodayIcon /> },
  { id: "Challenge", icon: <FlagIcon /> },
];

function Challenge() {
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
    <React.Fragment>
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
      <main className={`${classes.nightMode} ${classes.naviPadding}`}>
        {/* Hero unit */}
        <div className={classes.nightMode}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              <div className={classes.tagDiv}>
                <Card className={classes.tagCard}>건강</Card>
                <Card className={classes.tagCard}>취미</Card>
                <Card className={classes.tagCard}>자기계발</Card>
                <Card className={classes.tagCard}>재테크</Card>
              </div>
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Work 'till 5
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={log} title="Image title" />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>This is a media card. You can use this section to describe the content.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={(classes.footer, classes.nightMode)}>
        <Typography variant="h6" align="center" gutterBottom>
          Make your life
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default Challenge;
