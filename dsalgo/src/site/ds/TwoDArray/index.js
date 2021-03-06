import React, { useState, Fragment } from "react";
import Element from "../../../ui/Element";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Insert from "./Insert";

const gridStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: theme.spacing(2),
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function TwoDArray() {
  const gridclass = gridStyle();
  let [radioVal, setRadioVal] = useState(false);
  let showoperation = (event) => {
    let operation = event.target.value;
    setRadioVal(operation);
  };

  //-----------------content of render function ------------------------------------

  return (
    <div className={gridclass.root}>
      <Grid container direction="row" justify="left" alignItems="center">
        <Grid container item sm={4}>
          <Paper className={gridclass.paper}>
            <Grid item xs={12} sm={12} spacing={3} alignItems="center">
              <Card>
                <h6 className="bg-primary text-center text-white p-3">
                  Operations
                </h6>
                <CardContent className="pl-0 pr-0 pt-0 text-left">
                  <FormControl className="pl-3" component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup aria-label="gender" name="customized-radios">
                      <FormControlLabel
                        value="Insert"
                        onChange={showoperation}
                        control={<StyledRadio />}
                        label="Insert"
                      />
                      <FormControlLabel
                        value="Delete"
                        onChange={showoperation}
                        control={<StyledRadio />}
                        label="Delete"
                      />

                      <FormControlLabel
                        value="Search"
                        onChange={showoperation}
                        control={<StyledRadio />}
                        label="Search"
                      />
                    </RadioGroup>
                  </FormControl>
                </CardContent>
              </Card>
            </Grid>
            <Grid className="mt-3" item spacing={1} xs={12} sm={12}>
            <Insert
                open={radioVal === "Insert"}
                // insert={(data, where) => {
                //   insert(data, where);
                // }}
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid container sm={8}>
     
        </Grid>
      </Grid>
    </div>
  );
}
