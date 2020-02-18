import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import BugReportRoundedIcon from "@material-ui/icons/BugReportRounded";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  copyright: {
    minHeight: "12px",
    color: "white",
    textAlign: "center"
  },
  main: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.divider,
    color: "white",
    fontStyle: "italic",
    fontSize: "20px"
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: theme.palette.primary.dark
  },
  button: {
    margin: theme.spacing(1)
  },
  buttonGrid: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: '16px'
  }
}));


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}    

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

export default function StickyFooter() {
  const classes = useStyles();

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
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<BugReportRoundedIcon />}
              >
                Report Bug
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<PublishRoundedIcon />}
                onClick={()=>{topFunction()}}
              >
                Go Top
              </Button>
            </Grid>
          </Grid>

        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
