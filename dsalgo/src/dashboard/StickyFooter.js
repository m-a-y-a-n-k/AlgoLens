import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import BugReportRoundedIcon from "@material-ui/icons/BugReportRounded";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import LightBox from "../ui/LightBox";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    position: "absolute",
  },
  copyright: {
    minHeight: "12px",
    color: "white",
    textAlign: "center",
  },
  main: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.divider,
    color: "white",
    fontStyle: "italic",
    fontSize: "20px",
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: theme.palette.primary.dark,
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonGrid: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "16px",
  },
  topFab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.topFab}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Copyright() {
  const classes = useStyles();

  return (
    <Typography variant="body2" className={classes.copyright}>
      {"Copyright © "}
      <Link color="inherit" href="/">
        CSVisuals
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter(props) {
  const [dialogConfig, setDialogConfig] = React.useState(null);
  const classes = useStyles();
  const Config = {
    title: "TITLE",
    number: "1",
    contentJSX: (
      <div>
        <h3> Use for given your description</h3>
        <typography>
          hey i am in lightbox 1-damn. Put your content here for plug and play
        </typography>
      </div>
    ),
    open: {
      animation: "fade-in",
      callback: function (event) {
        alert("open");
      },
    },
    close: {
      escDisabled: false,
      backdropDisabled: true,
      animation: "fade-out",
      callback: function () {
        setDialogConfig(null);
        alert("closed");
      },
    },
    accept: {
      text: "Accept",
      callback: function (closefn) {
        alert("Accept");
        closefn && closefn();
      },
      icon: "fa fa-tick",
    },
    reject: {
      text: "Reject",
      icon: "fa fa-close",
      callback: function (closefn) {
        alert("rejected");
        closefn && closefn();
      },
    },
  };
  const openLightBox = () => {};
  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Typography variant="body1" className={classes.main}>
          {`
                CSVisuals is a website built for the sole purpose of 
                providing a platform for visualising and providing intuitive explainations to 
                various data structures and algorithms in the various sub-domains of the vast field 
                of study and research in Computer Science
            `}
        </Typography>
        <Grid container spacing={3} className={classes.buttonGrid}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<BugReportRoundedIcon />}
              onClick={() => {
                setDialogConfig(Config);
                // handleOpen();
              }}
            >
              Report Bug
            </Button>
          </Grid>
          <Grid item xs={12}>
            <ScrollTop {...props}>
              <Fab
                color="secondary"
                size="small"
                aria-label="scroll back to top"
              >
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>
          </Grid>
        </Grid>

        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
      <LightBox dialogConfig={dialogConfig} />
    </div>
  );
}
