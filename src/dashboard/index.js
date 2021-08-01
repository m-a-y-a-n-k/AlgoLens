import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import siteLogo from "../common/assets/VisuAlgo.jpg";
import useWindowDimensions from "../common/helpers/dimensions";
import {BRAND_NAME} from "../common/helpers/constants";
const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    padding: theme.spacing(2),
  },
  gridItem: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    margin: theme.spacing(3),
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
    width: "75%",
    [theme.breakpoints.down("xs")]: {
      width: "auto",
    },
  },
  media: {
    width: "100%",
    paddingTop: "100%", // 1:1 aspect ratio
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const windowDimensions = useWindowDimensions();
  const isDesktop = windowDimensions.width > 768;

  const knowMoreText = `${BRAND_NAME} is an excellent and proud platform designed by
  strongly passionate Computer Science alumni of Delhi
  Technological University, Delhi, India to bridge the gap
  between new comers in Computer Science and those who are
  masters of the field by acting as a solution that helps both
  in learning and teaching related concepts. It is an effort in
  the direction of improving fundamentals of those who want to
  pursue Computer Science or who use it on a daily basis in
  their life. Primarily for Programming Professionals,
  Professors and Students from various institutions across the
  globe.`;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12} className={classes.gridItem}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label={BRAND_NAME} className={classes.avatar}>
                  AL
                </Avatar>
              }
              title={"Meet The Platform"}
              titleTypographyProps={{
                variant: isDesktop ? "h4" : "h6",
                color: "primary",
              }}
              subheader="Initiative since Nov 2019"
              subheaderTypographyProps={{
                variant: isDesktop ? "subtitle1" : "caption",
                color: "secondary",
              }}
            />
            <CardMedia
              className={classes.media}
              image={siteLogo}
              title={BRAND_NAME}
            />
            <CardContent>
              <Typography variant="h5" color="textPrimary">
               {BRAND_NAME} stands for Computer Science Visualizations
              </Typography>
              {isDesktop && (
                <Paper elevation={2} className={classes.paper}>
                  <Typography variant="subtitle1">{knowMoreText}</Typography>
                </Paper>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
