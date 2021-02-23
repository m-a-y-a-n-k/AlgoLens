import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import siteLogo from "../VisuAlgo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    padding: theme.spacing(2),
    minHeight: "50vh",
  },
  gridItem: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    margin: theme.spacing(3),
  },
  line: {
    margin: 0,
    padding: "1px !important",
    border: "none",
    color: theme.palette.text.secondary,
    background: "rgba(225,235,245,0.25)",
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    fontSize: 16,
    color: "grey",
  },
  expand: {
    fontSize: 14,
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: blue[800],
  },
  card: {
    width: 700,
  },
  media: {
    height: "100vh",
    paddingTop: "56.25%", // 16:9,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const lines = `
  000000000000000000000000000111111111111000000000000000000000000001111111111111000000000000000.
  000000000000000000000000001111111111110000000000000000000000000011111111111110000000000000000.
  000000000000000000000000011111111111100000000000000000000000000111111111111100000000000000000.
  000000000000000000000000111111111111000000000000000000000000001111111111111000000000000000000.
  000000000000000000000001111111111110000000000000000000000000011111111111110000000000000000000.
  000000000000000000000011111111111100000000000000000000000000111111111111110000000000000000000.
  000000000000000000000111111111111000000000000000000000000000111111111111100000000000000000000.
  000000000000000000001111111111111000000000000000000000000000111111111111100000000000000000000.
  000000000000000000011111111111110000000000000000000000000000011111111111110000000000000000000.
  000000000000000000011111111111100000000000000000000000000000001111111111111000000000000000000.
  000000000000000000011111111111000000000000000000000000000000000111111111111100000000000000000.
  000000000000000000011111111111000000000000000000000000000000000011111111111110000000000000000.
  000000000000000000011111111111000000000000000000000000000000000001111111111111000000000000000.
  000000000000000000011111111111100000000000000000000000000000000000111111111111100000000000000.
  000000000000000000011111111111110000000000000000000000000000000000111111111111110000000000000.
  000000000000000000001111111111111000000000000000000000000000000000111111111111110000000000000.
  000000000000000000000111111111111100000000000000000000000000000001111111111111110000000000000.
  000000000000000000000011111111111110000000000000000000000000000011111111111111100000000000000.
  000000000000000000000000111111111111000000000000000000000000000111111111111111000000000000000.
  000000000000000000000000011111111111100000000000000000000000001111111111111100000000000000000.
  000000000000000000000000001111111111110000000000000000000000011111111111111000000000000000000.
  000000000000000000000000000111111111111000000000000000000000111111111111110000000000000000000.
  `;

  const [status, setStatus] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setStatus(!status);
    }, 2000);
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12} className={classes.gridItem}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="VisuAlgo" className={classes.avatar}>
                  VA
                </Avatar>
              }
              title={<h2 style={{ marginTop: 32 }}>Meet The Platform</h2>}
              subheader="Initiative since Nov 2019"
            />
            <CardMedia
              className={classes.media}
              image={siteLogo}
              title="VisuAlgo"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                VisuAlgo stands for Computer Science Visualizations
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={classes.expand}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                Know More
                <ExpandMoreIcon
                  className={clsx({
                    [classes.expandOpen]: expanded,
                  })}
                />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Paper elevation={3} className={classes.paper}>
                  {`VisuAlgo is an excellent and proud platform designed by strongly passionate Computer Science alumni of Delhi Technological University, Delhi, India to bridge the gap between new comers in Computer Science and those who are masters of the field by acting as a solution that helps both in learning and teaching related concepts. It is an effort in the direction of improving fundamentals of those who want to pursue Computer Science or who use it on a daily basis in their life. Primarily for Programming Professionals, Professors and Students from various institutions across the globe.`}
                </Paper>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        {false && (
          <Grid item sm={12} className={classes.gridItem}>
            <Grow in={status} {...{ timeout: 800 }}>
              <Grid container spacing={2}>
                {lines.split(".").map((line, idx) => {
                  return (
                    <Grid item sm={12} key={idx} className={classes.line}>
                      {line.split("").map((bit) => {
                        return (
                          <span
                            style={{
                              color: `${bit === "1" ? "red" : "lightblue"}`,
                            }}
                          >
                            {bit}
                          </span>
                        );
                      })}
                    </Grid>
                  );
                })}
              </Grid>
            </Grow>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
