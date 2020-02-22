import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { fade, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//styling the form and component
const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 3
  },
  bullet: {
    display: "inline-block",
    margin: "0 8px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 175,
    marginTop: 33
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(1)
  }
}));

// input field styling
const useStylesReddit = makeStyles(theme => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    margin: "4px 0px 0px 0px",

    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff"
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main
    }
  },

  focused: {}
}));

// handling input field
function RedditTextField(props) {
  const classes = useStylesReddit();
  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}

export default function Delete(props) {
    ///--------- Select the start or end input type ------------
    const classes1 = useStyles();
    const [where, setWhere] = React.useState("");
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
    
      if(inputLabel.current==null)
      return(null);
        setLabelWidth(inputLabel.current.offsetWidth);
       
    }, []);
  
    const handleChange = event => {
      setWhere(event.target.value);
    };
  
    //-----------------------------------------------------------------
  
    const classes = useStyles();
  
    const [data, setData] = React.useState(null); // stores the data entered in the list
  
    const [position, setPosition] = React.useState(null); //position
   
   if(props.show1==='Delete')
    return (
      <Card
        className={classes.root}
        style={{ border: "1px solid rgba(22,45,167,0.9)" }}
      >
        <CardContent className="bg-primary text-white ">
          <Typography variant="h5" component="h2">
            {" "}
            Delete
          </Typography>
        </CardContent>
  
        <CardContent className=" text-center pb-0 mt-0">
          <Typography variant="h6" component="h2">
            Position or value
          </Typography>
        </CardContent>
  
        <CardActions>
          <FormControl variant="outlined" className={classes1.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              Position
            </InputLabel>
  
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={where}
              onChange={handleChange}
              labelWidth={labelWidth}
            >
              <MenuItem value={"start"}>Start</MenuItem>
              <MenuItem value={"end"}>End</MenuItem>
            </Select>
  
            <Typography className="text-center">Or</Typography>
  
            <RedditTextField
              className="w-50"
              label="Index"
              className={classes.margin}
              onChange={event => {
                setPosition(event.target.value);
              }}
              value={position ? position : ""}
              variant="filled"
              id="reddit-input"
            />
  
            <Typography className="text-center" variant="h6">
              {" "}
              Or{" "}
            </Typography>
            <RedditTextField
              label="Value"
              className={classes.margin}
              onChange={event => {
                setData(event.target.value);
              }}
              value={data ? data : ""}
              variant="filled"
              id="reddit-input"
            />
  
            <Button
              className="mt-2"
              onClick={() => {
                props.del(data, where, parseInt(position)); // calling the del function of the LinkList compoent
                setData(null);
                setPosition(null);
              }}
              variant="outlined"
              color="primary"
            >
              Submit
            </Button>
          </FormControl>
        </CardActions>
      </Card>
    )
    else
    return(<div></div>)
  }
  