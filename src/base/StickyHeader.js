import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SearchSuggestor from "../common/components/SearchSuggestor";
import Image from "material-ui-image";
import Grid from "@material-ui/core/Grid";
import siteLogo from "../common/assets/VisuAlgo.png";
import { siteSugg } from "../routing/base/routes";

const useStyles = makeStyles((theme) => ({
  logoSec: {
    width: 125,
  },
  header: {
    "-moz-flex-shrink": 0,
    WebkitFlexShrink: 0,
    "-ms-flex-shrink": 0,
    flexShrink: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  homeButton: {
    "&:hover": {
      color: "white",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div id="back-to-top-anchor" className={classes.header}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <section className={classes.logoSec}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Image color="transparent" src={siteLogo} aspectRatio={1} />
              </Grid>
            </Grid>
          </section>
          <SearchSuggestor
            id="sitemapSugg"
            searchOps={siteSugg}
            updateSelection={(selection) => {
              window.location.pathname = selection.route;
            }}
          />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="home page"
              color="inherit"
              disabled={window.location.pathname === "/"}
              href="/"
              className={classes.homeButton}
            >
              <HomeIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
