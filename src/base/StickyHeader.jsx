import React, { lazy } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { siteSugg } from "routing/base/routes"
import { DynamicLoader } from "routing/base/Router"
import constants from "common/helpers/constants"

const IconButton = lazy(() => import(`@material-ui/core/IconButton`))
const HomeIcon = lazy(() => import(`@material-ui/icons/Home`))
const Search = lazy(() => import(`common/components/SearchSuggestor`))
const FixedSideDrawer = lazy(() => import(`base/FixedSideDrawer`))

const useStyles = makeStyles((theme) => ({
  menuSec: {
    width: "5vw",
    [theme.breakpoints.down("xs")]: {
      width: "10vw",
    },
  },
  logoSec: {
    width: "5vw",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  searchSec: {
    width: "85vw",
  },
  iconSec: {
    paddingLeft: 30,
  },
  header: {
    "-moz-flex-shrink": 0,
    WebkitFlexShrink: 0,
    "-ms-flex-shrink": 0,
    flexShrink: 0,
    height: 70,
    [theme.breakpoints.down("xs")]: {
      height: 60,
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
}))

export default function PrimarySearchAppBar() {
  const classes = useStyles()

  return (
    <AppBar position="fixed" id="back-to-top-anchor" className={classes.header}>
      <Toolbar>
        <section className={classes.menuSec}>
          {DynamicLoader(FixedSideDrawer)}
        </section>
        <section className={classes.searchSec}>
          {DynamicLoader(Search, {
            id: "sitemapSugg",
            searchOps: siteSugg,
            updateSelection: (selection) => {
              window.location.hash = selection.route
            },
          })}
        </section>
        <div className={classes.iconSec}>
          {DynamicLoader(IconButton, {
            "aria-label": "home page",
            color: "inherit",
            disabled: window.location.pathname === `/${constants.BRAND_NAME}`,
            href: `/${constants.BRAND_NAME}`,
            className: classes.homeButton,
            children: DynamicLoader(HomeIcon),
          })}
        </div>
      </Toolbar>
    </AppBar>
  )
}
