import React, { useState, Fragment,useEffect } from "react";

import Element from "../../../ui/Element";

import Insert from "./Insert";
import Delete from "./Delete";
import Search from "./Search";
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

const gridStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: theme.spacing(2)
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
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
      outlineOffset: 2
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
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
      content: '""'
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3"
    }
  }
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

export default function LinkedList() {
  const gridclass = gridStyle();
  let [setds, setSetds] = useState([]);
  let [list, setList] = useState(null);
  let [rendered, setRendered] = useState(false);
  let [radioVal, setRadioVal] = useState(false);
  let [isGreat, setIsGreat] = useState('');
  let [findata, setFindata] = useState(null);
  let showoperation = event => {
    let operation = event.target.value;
    setRadioVal(operation);
  };


  // insert--------------------------------------------------------


  const SortedSet = require('js-sorted-set');

  let insert = (data) => {
    if (data) {
      if (data.length < 7 && isNaN(data) == false) {
        const set = new SortedSet();
        set.insert(data);
        setds.forEach((value, index) => {
          if (!set.contains(value))
            set.insert(value);
          else
            alert("already present");

        })
        console.log(set.map((x) => { return x }));
        let setarr = set.map((x) => { return x });
        setRendered(false);
        setSetds(setarr);
      }
      else {
        alert("Invalid input (must contains integers only)");
      }

    }

    else {
      alert("Enter data");
    }
  }

  //----------Using "del" instead of delete is some keyword
  let del = (data) => {
    if (data) {
      if (data.length < 6 && isNaN(data) == false) {
        let newsetds = setds.filter((value) => {
          if (value != data) {
            return value;
          }
        })

        if (newsetds.length != setds.length) {
          setSetds(newsetds);
          setRendered(false);
        }
        else {
          alert("value not exists in the set");
        }
      }
      else {
        alert("Invalid input (must contains integers only)");
      }
    }
    else {
      alert("Enter data");
    }
  };
  // search
  let search = (data, where) => {
    if (data) {

      if (data.length < 7 && isNaN(data) == false) {
        if (setds.includes(data)) {
          setIsGreat(where);
          setFindata(data);
          setRendered(false);
        }
        else {
          alert("element not exits");
        }
      }
      else {
        alert("Invalid input (must contains integers only)");
      }

    }
    else {
      alert("Enter data");
    }
  }

  // render list 
  let renderList = () => {

    let list = [];
    let key = 0;

    if (setds != null) {
      for (var i = 0; i < setds.length; i++) {
        list.push(
          <Fragment key={key + "-" + setds[i]}>
            <Element
              data={{ value: parseInt(setds[i]) }}
              type="sets"
              next={true}
              highlight={(isGreat === "no" && findata != null && parseInt(setds[i]) === parseInt(findata)) ? true : false}
              AllGreater={(isGreat === "allg" && parseInt(setds[i]) > parseInt(findata)) ? true : false}
              AllSmaller={(isGreat === "alls" && parseInt(setds[i]) < parseInt(findata)) ? true : false}
            />
          </Fragment>
        );

        key++;
      }

      setIsGreat(null);
      setFindata(null);
      setList(list);
      setRendered(true);
    }
  };

  //-----------------content of render function ------------------------------------
  React.useEffect(() => {
    if (!rendered) {
      renderList();
    }
  });

  return (
    <div className={gridclass.root}>
      <Grid container direction="row" justify="left" alignItems="center">
        <Grid container sm={4}>
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
            <Grid className="mt-3" item spacing={4} xs={12} sm={12}>
              <Insert
                open={radioVal === "Insert"}
                insert={(data) => {
                  insert(data);
                }}
              />
              <Search
                open={radioVal === "Search"}
                search={(data, where) => {
                  search(data, where);
                }}
              />
              <Delete
                open={radioVal === "Delete"}
                del={(data) => {
                  del(data);
                }}
              />


            </Grid>
          </Paper>
        </Grid>
        <Grid container style={{ border: "2px solid black", height: "auto" }} sm={8}>
          {list}
        </Grid>
      </Grid>
    </div>
  );
}
