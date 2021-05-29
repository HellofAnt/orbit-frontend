import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import log from "img/test.png";

const useStyles = makeStyles((theme) => ({
  nightMode: {
    backgroundColor: "rgb(30,30,30)",
    color: "white",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  tagDiv: {
    paddingTop: "15px",
    display: "flex",
    justifyContent: "space-around",
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
    backgroundColor: "rgb(80,80,80)",
    color: "white",
    borderRadius: "15px",
  },
  tagCard: {
    width: "70px",
    height: "70px",
    fontSize: "0.3em",
    paddingTop: "15px",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    margin: "20px",
    filter: "grayscale(100)",
    backgroundSize: "contain",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

let cards = [];
let cardLength = 16;
for (let i = 0; i < cardLength; i++) {
  cards.push(i);
}

function Challenge() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
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
                      첼린지 제목
                    </Typography>
                    <Typography>해당 첼린지 간단 소개 문단입니다. 해당 첼린지 간단 소개 문단입니다.</Typography>
                    <div>
                      <div>리더 닉네임</div>
                      <div>첼린지 기간</div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Challenge;
