
import React, { useState } from "react";
import { makeStyles, fade } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { FormControl } from "@material-ui/core";

//Card component styling
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

  // button styling ---------------------------------------------------
  const styleforbutton = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));




export default function Pop(props) {

    const classes = useStyles();
    const buttonstyle = styleforbutton();
    return (
      <Card className={classes.root} variant="outlined" className="pr-0" >
        <h2 className="bg-primary text-white  p-2" > Pop </h2>
  
        <CardActions>
  
          <FormControl className={buttonstyle.root} className="pb-3 w-100 pt-1" noValidate>
            <Button
              className="ml-2 mr-2"
              onClick={() => {
                props.pop();
              }}
              variant="outlined"
              color="primary"
  
              size="large"
            >
              Submit
                </Button>
          </FormControl>
  
        </CardActions>
      </Card>
    );
  }
  