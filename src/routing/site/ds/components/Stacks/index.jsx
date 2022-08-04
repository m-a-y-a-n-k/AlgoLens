import React, { useState } from "react";
import Element from "../../../../../common/components/Element";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Push from "./Push";
import Pop from "./Pop";
import Get from "./Get";
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

// modified version
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

export default function Stack(props) {
  const gridclass = gridStyle();

  let [array, setArray] = useState([]);
  let [highlights, setHighlights] = useState(null);
  let [where, setWhere] = useState("Top");
  let [result, setResult] = useState(null);

  let [radioVal, setRadioVal] = useState(false);

  let showoperation = (event) => {
    let operation = event.target.value;
    setRadioVal(operation);
  };

  let push = (data) => {
    if (data) {
      let arr = array;
      arr.splice(0, 0, data);
      setArray(arr);
      setHighlights([0]);
      setResult(null);
    } else {
      alert("Nothing to Push");
    }
  };

  let pop = () => {
    let arr = array;
    arr.splice(0, 1);
    setArray(arr);
    setHighlights([]);
    setResult(null);
  };

  let get = () => {
    let arr = array;

    switch (where.toLowerCase()) {
      case "top":
        setHighlights([0]);
        setResult(arr[0]);
        return;
      case "bottom":
        setHighlights([arr.length - 1]);
        setResult(arr[arr.length - 1]);
        return;
      default:
    }
  };

  return (
    <div className={gridclass.root}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-end"
      >
        <Paper className={gridclass.paper}>
          <Grid item xs={12} sm={12} m={4}>
            <Card>
              <h2 className="bg-primary text-white p-3">Operations</h2>
              <CardContent className="pl-0 pr-0 pt-0 text-left">
                <FormControl className="pl-3" component="fieldset">
                  <FormLabel component="legend"></FormLabel>
                  <RadioGroup aria-label="gender" name="customized-radios">
                    <FormControlLabel
                      value="Push"
                      onChange={showoperation}
                      control={<StyledRadio />}
                      label="Push"
                    />
                    <FormControlLabel
                      value="Pop"
                      onChange={showoperation}
                      control={<StyledRadio />}
                      label="Pop"
                    />
                    <FormControlLabel
                      value="Get"
                      onChange={showoperation}
                      control={<StyledRadio />}
                      label="Get"
                    />
                  </RadioGroup>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
          <Grid item className="mt-3" xs={12} sm={12}>
            <Push
              open={radioVal === "Push"}
              push={(data) => {
                push(data);
              }}
            />
            <Pop
              open={radioVal === "Pop"}
              pop={() => {
                pop();
              }}
            />
            <Get
              open={radioVal === "Get"}
              modifywhere={(position) => {
                setWhere(position);
              }}
              result1={result}
              array1={array}
              get={() => {
                get();
              }}
            />
          </Grid>
        </Paper>

        <Grid item xs={8} sm={6} className="ml-4">
          <Box
            display="flex"
            flexWrap="wrap"
            flexDirection="column"
            p={1}
            m={1}
            bgcolor="background.paper"
            css={{
              border: "1px solid black",
              borderTop: "none",
            }}
            className="col-sm-12"
          >
            {array.map((value, index) => {
              let highlight = false;
              if (highlights.includes(index)) {
                highlight = true;
              }
              return (
                <Element
                  highlight={highlight}
                  key={`${value}-${index}`}
                  data={{ value, index }}
                  type="stack"
                />
              );
            })}
          </Box>
          <Box textAlign="center" className="col-sm-12">
            Stack Container
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
