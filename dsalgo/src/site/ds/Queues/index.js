import React, { useState, Fragment } from "react";
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
import Insert from "./Insert.js";
import Delete from "./Delete.js";
import Update from "./Update.js";
import Search from "./Search.js";
import Element from "../../../ui/Element";

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

export default function Queues() {
  const gridclass = gridStyle();
  let [head, setHead] = useState(null);
  let [list, setList] = useState(null);
  let [rendered, setRendered] = useState(false);
  let [radioVal, setRadioVal] = useState(false);

  let showoperation = (event) => {
    let operation = event.target.value;
    setRadioVal(operation);
  };

  // clear function --------------------------------------------
  let clear = () => {
    let curr = head;
    while (curr) {
      curr.highlight = false;
      curr = curr.next;
    }
    setHead(head);
  };
  // insert--------------------------------------------------------
  let insert = (data, where) => {
    if (data) {
      clear();
      let newNode = { info: data, next: null, highlight: false },
        curr;
      if (!head) {
        setHead({ ...newNode });
      } else {
        switch (where.toLowerCase()) {
          case "start":
            newNode.next = head;
            setHead({ ...newNode });
            break;
          case "end":
          default:
            curr = head;
            while (curr.next) {
              curr = curr.next;
            }
            curr.next = newNode;
            setHead({ ...head });
        }
      }
      setRendered(false);
    } else {
      alert("Empty Insert");
    }
  };
  //----------------Search---------------------------------------------
  // Seacrh----------------------------------------------------

  let search = (data, where) => {
    if (data) {
      clear();
      let head1 = head,
        curr = head;
      while (curr) {
        if (curr.info === data) {
          curr.highlight = true;
        }
        curr = curr.next;
      }
      setHead(head1);
      setRendered(false);
    } else if (where) {
      let newNode = head,
        curr;
      switch (where.toLowerCase()) {
        case "start":
          newNode.highlight = true;
          setHead({ ...newNode });
          setRendered(false);

          break;
        case "end":
        default:
          curr = head;
          while (curr.next) {
            curr = curr.next;
          }
          curr.highlight = true;

          setHead({ ...head });
          setRendered(false);
      }
    } else {
      alert("Empty Search");
    }
  };

  //-------------------Delete-----------------------------
  let del = (where) => {
    if (head) {
      clear();
      if (where) {
        switch (where) {
          case "start":
            head = head.next;
            break;

          default:
        }
        setHead(head);
      } else {
        alert("Invalid Deletion Exception");
      }
      setRendered(false);
    } else {
      alert("Queue is empty");
    }
  };
  //--------------------------------Update--------------------------------
  let update = (position, value) => {
    if (position && value && parseInt(position) >= 0) {
      clear();
      let head1 = head,
        curr = head;
      while (curr && --position >= 0) {
        curr = curr.next;
      }
      if (curr) {
        curr.info = value;
        curr.highlight = true;
        setHead(head1);
        setRendered(false);
      } else {
        alert("Position out of bounds");
      }
    } else {
      alert("Cannot update");
    }
  };
  let renderList = () => {
    let list = [];
    if (head) {
      let curr = head,
        key = 0;
      while (curr) {
        if (curr.next) {
          list.push(
            <Fragment key={key + "-" + curr.info}>
              <Element
                data={{ value: curr.info, index: key }}
                type="queues"
                next={true}
                highlight={curr.highlight}
              />
            </Fragment>
          );
        } else {
          list.push(
            <Fragment key={key + "-" + curr.info}>
              <Element
                data={{ value: curr.info, index: key }}
                type="queues"
                next={false}
                highlight={curr.highlight}
              />
            </Fragment>
          );
        }
        curr = curr.next;
        key++;
      }
    }
    setList(list);
    setRendered(true);
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
                        value="Update"
                        onChange={showoperation}
                        control={<StyledRadio />}
                        label="Update"
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
                insert={(data, where) => {
                  insert(data, where);
                }}
              />
              <Delete
                open={radioVal === "Delete"}
                del={(data, where, position) => {
                  del(data, where, position);
                }}
              />
              <Update
                open={radioVal === "Update"}
                update={(position, value) => {
                  update(position, value);
                }}
              />
              <Search
                open={radioVal === "Search"}
                search={(data, where) => {
                  search(data, where);
                }}
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid container sm={8}>
          {list}
        </Grid>
      </Grid>
    </div>
  );
}
