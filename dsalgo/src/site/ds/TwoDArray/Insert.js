import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { fade, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//styling the form and component
const useStyles = makeStyles((theme) => ({
    button:{
        width: "50%",
        marginLeft: "20%",
        marginRight:"10%",
        marginBottom:"2%"
      },
  
    root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
    minWidth: 10,
  },
  bullet: {
    display: "flex",

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
    margin: theme.spacing(2),
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

// Insert component --------------------------------------------------------------------------------------
export default function Insert(props) {
  ///--------- Select the start or end input type ------------

  const [where, setWhere] = useState("");
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  React.useEffect(() => {
    if (inputLabel.current == null) return null;
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (event) => {
    setWhere(event.target.value);
  };
  //-----------------------------------------------------------
  const classes = useStyles();
  const [data, setData] = React.useState(null); // stores the data entered in the list
  const [row, setRow] = React.useState(null);
  const [col, setCol] = React.useState(null);

  if (props.open) {
    return (
      <Card
        className={classes.root}
        style={{ border: "1px solid rgba(22,45,167,0.9)" }}
      >
        <CardContent className="bg-primary text-white">
          <Typography variant="h5" component="h2">
            Insert
          </Typography>
        </CardContent>

        <CardContent className=" text-center pb-0 mt-0">
          
        </CardContent>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={6}>
          <Typography align="center" variant="h6" component="h3" >
           Matrix-1
          </Typography>
            <CardActions>
              
              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  key="outlined-number"
                  label="Rows"
                  type="number"
                  value={row}
                  onChange={(event) => {
                    setRow(event.target.value);
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <TextField
                  key="outlined-number2"
                  label="Columns"
                  type="number"
                  value={col}
                  onChange={(event) => {
                    setCol(event.target.value);
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                {console.log("value of col " + col)}
                {console.log("value of row " + row)}

                <RedditTextField
                  key="outlined-number3"
                  label="Enter Data"
                  className={classes.margin}
                  onChange={(event) => {
                    setData(event.target.value);
                  }}
                  value={data ? data : ""}
                  variant="filled"
                  id="reddit-input"
                />
              </FormControl>
            </CardActions>
          </Grid>
          <Grid  item xs={12} sm={12} md={6}>
          <Typography  align="center" variant="h6" component="h3">
           Matrix-2
          </Typography>
            <CardActions>
              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  key="outlined-number"
                  label="Rows"
                  type="number"
                  value={row}
                  onChange={(event) => {
                    setRow(event.target.value);
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <TextField
                  key="outlined-number2"
                  label="Columns"
                  type="number"
                  value={col}
                  onChange={(event) => {
                    setCol(event.target.value);
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                {console.log("value of col " + col)}
                {console.log("value of row " + row)}

                <RedditTextField
                  key="outlined-number3"
                  label="Enter Data"
                  className={classes.margin}
                  onChange={(event) => {
                    setData(event.target.value);
                  }}
                  value={data ? data : ""}
                  variant="filled"
                  id="reddit-input"
                />
              </FormControl>
            </CardActions>
          </Grid>
          <Grid container item xs={12} sm={12} md={12}  >
            
              <Button
                
                //   onClick={() => {
                //     props.insert(data, where); // calling the insert function of the LinkList compoent
                //     setData(null);
                //   }}
                className={classes.button}
                variant="outlined"
                color="primary"
                
              >
                Submit
              </Button>
            
          </Grid>
        </Grid>
      </Card>
    );
  } else return <div></div>;
}
