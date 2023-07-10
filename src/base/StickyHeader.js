import React, { lazy } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import siteLogo from "../common/assets/VisuAlgo.png";
import { siteSugg } from "../routing/base/routes";
import { DynamicLoader } from "../routing/base/Router";
import { red } from "@material-ui/core/colors";

const IconButton = lazy(() => import(`@material-ui/core/IconButton`));
const MenuIcon = lazy(() => import(`@material-ui/icons/Menu`));
const HomeIcon = lazy(() => import(`@material-ui/icons/Home`));
const Image = lazy(() => import(`material-ui-image`));
const Search = lazy(() => import(`../common/components/SearchSuggestor`));
const Grid = lazy(() => import(`@material-ui/core/Grid`));

const useStyles = makeStyles((theme) => ({
  menuSec: {
    width: "3vw",
  },
  // logoSec: {
  //   // width: "5vw",
  //   // border: '10px solid red',

  //   // [theme.breakpoints.down("xs")]: {
  //   //   display: "none",
  //   // },
  // },
  searchSec: {
    width: "80vw",
    margin: "10px 10px 10px 10px",
    padding: "50px 30px",
    // height: "10vh",
  },
  iconSec: {
    paddingLeft: 30,
  },
  header: {
    "-moz-flex-shrink": 0,
    WebkitFlexShrink: 0,
    "-ms-flex-shrink": 0,
    flexShrink: 0,
    height: 80,
    backgroundColor: '#222331',
    [theme.breakpoints.down("xs")]: {
      height: 80,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
    <AppBar
      position="static"
      id="back-to-top-anchor"
      className={classes.header}
    >
      <Toolbar>
        <section className={classes.menuSec}>
          {DynamicLoader(IconButton, {
            edge: "start",
            className: classes.menuButton,
            color: "inherit",
            "aria-label": "open drawer",
            children: DynamicLoader(MenuIcon),
          })}
        </section>
        <section className={classes.logoSec}>
          {DynamicLoader(Grid, {
            container: true,
            spacing: 3,
            children: DynamicLoader(Grid, {
              item: true,
              xs: 12,
              children: DynamicLoader(Image, {
                color: "transparent",
                src: siteLogo,
                aspectRatio: 1,
                alt: "VisuAlgo",
              }),
            }),
          })}
        </section>
        <section className={classes.searchSec}>
          {DynamicLoader(Search, {
            id: "sitemapSugg",
            searchOps: siteSugg,
            updateSelection: (selection) => {
              window.location.pathname = selection.route;
            },
          })}
        </section>
        <div className={classes.iconSec}>
          {DynamicLoader(IconButton, {
            "aria-label": "home page",
            color: "transperant",
            disabled: window.location.pathname === "/",
            href: "/",
            className: classes.homeButton,
            children: DynamicLoader(HomeIcon),
          })}
        </div>
      </Toolbar>
    </AppBar>
  );
}
