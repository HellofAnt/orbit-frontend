import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import LoopIcon from '@material-ui/icons/Loop';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FlagIcon from '@material-ui/icons/Flag';
import Chart from 'chart.js/auto';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    width: theme.spacing(100),
    overflow: 'auto',
  },
  contentWrap : {
    display: 'flex',
  },
  contents: {
    flexFlow: 'column wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    margin: theme.spacing(1),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:93
    height: 140,
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const menuInfo = [
  { id: 'Orbit', icon: <HomeIcon /> },
  { id: 'Routine', icon: <LoopIcon /> },
  { id: 'Calendar', icon: <CalendarTodayIcon /> },
  { id: 'Challenge', icon: <FlagIcon /> },
]
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const data = {
  labels: ['건강', '재태크', '취미', '교육'],
  datasets: [
    {
      data: [65, 59, 80, 81],
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
      ],
      borderWidth : 1,
    },
  ],
};

const options = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: false,
    title: {
      display: false,
    },
    datalabels: {
      //color: 'black',
      display: false,
    },
  },
};

let labels = ['건강', '재태크', '취미', '교육'];
let chartData = [65, 59, 80, 81];
let backgroundColor = [
  'rgba(255, 159, 64, 0.2)',
  'rgba(255, 205, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(54, 162, 235, 0.2)',
];
let borderColor = [
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(54, 162, 235)',
];

let chart = new Chart('chart', {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      data: chartData
    }]
  },
  options: {
    indexAxis: 'y',
  	legend: false,
    tooltip: false,
    plugins: {
      datalabels: {
        align: function(context) {
        	var index = context.dataIndex;
          var value = context.dataset.data[index];
          var invert = Math.abs(value) <= 1;
          return value < 1 ? 'end' : 'start'
        },
        anchor: 'end',
        backgroundColor: null,
        borderColor: null,
        borderRadius: 4,
        borderWidth: 1,
        color: '#223388',
        font: {
          size: 11,
          weight: 600
        },
        offset: 4,
        padding: 0,
        formatter: function(value) {
        	return Math.round(value * 10) / 10
        }
      }
    }
  }
});

export default function Routine() {
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
    <div className={classes.root}>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.contentWrap}>
          <div className={classes.contents}>
            <Paper variant="outlined" className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="h5" component="h2" align="left">
                      나의 루틴
                      </Typography>
                      <Typography>
                        <Bar data={data} options={options} />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <Paper variant="outlined" className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container spacing={2}>
                    <Grid item xs>
                      <Typography variant="h5" component="h2" align="left">
                      진행중 챌린지
                      </Typography>
                      <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                              <Card className={classes.card}>
                                <CardMedia
                                  className={classes.cardMedia}
                                  image="https://source.unsplash.com/random"
                                  title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                  <Typography>
                                      This is a media card. You can use this section to describe the content.
                                  </Typography>
                                </CardContent>
                              </Card>
                           </Grid>
                        ))}
                        </Grid>
                    </Container>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
          <div className={classes.contents}>
            <Paper variant="outlined" className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="h5" component="h2" align="left">
                      오늘의 루틴
                      </Typography>
                      <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                      ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                      facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                      gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                      donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                      adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                      Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                      imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                      arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                      donec massa sapien faucibus et molestie ac.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <Paper variant="outlined" className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="h5" component="h2" align="left">
                      도전중인 챌린지
                      </Typography>
                      <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                      ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                      facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                      gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                      donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                      adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                      Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                      imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                      arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                      donec massa sapien faucibus et molestie ac.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </div>
        <Box pt={4}>
        <Copyright />
      </Box>
      </main>
    </div>
  );
}