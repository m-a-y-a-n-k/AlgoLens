import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import { fade, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

//styling the form and component
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 3,
  },
  bullet: {
    display: "inline-block",
    margin: "0 8px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 175,
    marginTop: 33,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

// input field styling
const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    margin: "4px 0px 0px 0px",

    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },

  focused: {},
}));

// handling input field
function RedditTextField(props) {
  const classes = useStylesReddit();
  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

export default function Search(props) {
  const classes1 = useStyles(); //style for formcontrol
  const classes = useStyles(); // style for card component
  const [data, setData] = React.useState(null); // stores the data entered in the list
  if (props.open)
    return (
      <Card
        className={classes.root}
        style={{ border: "1px solid rgba(22,45,167,0.9)" }}
      >
        <CardContent className="  bg-primary text-white">
          <Typography variant="h5" component="h2">
            {" "}
            Search{" "}
          </Typography>
        </CardContent>

        <CardContent className="text-center pb-0 mt-0">
          <Typography variant="h6" component="h2">
            Data
          </Typography>
        </CardContent>

        <CardActions>
          <FormControl variant="outlined" className={classes1.formControl}>
            <RedditTextField
              label="Value"
              className={classes.margin}
              onChange={(event) => {
                setData(event.target.value);
              }}
              value={data ? data : ""}
              variant="filled"
              id="reddit-input"
            />

            <Button
              onClick={() => {
                props.search(data, "allg"); // calling the search function of the LinkList compoent
                setData(null);
              }}
              variant="outlined"
              color="primary"
              className="mt-2"
            >
              All Greater elements
            </Button>
            <Button
              onClick={() => {
                props.search(data, "alls"); // calling the search function of the LinkList compoent
                setData(null);
              }}
              variant="outlined"
              color="primary"
              className="mt-2"
            >
              All Smaller element
            </Button>
            <Button
              onClick={() => {
                props.search(data, "no"); // calling the search function of the LinkList compoent
                setData(null);
              }}
              variant="outlined"
              color="primary"
              className="mt-2"
            >
              Submit
            </Button>
          </FormControl>
        </CardActions>
      </Card>
    );
  else return <div></div>;
}
