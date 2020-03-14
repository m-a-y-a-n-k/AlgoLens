
import React, { useState } from "react";
import { makeStyles, fade } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { FormControl } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


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


// ------- Dropdown styling 


const stylefordropdown = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function Get(props) {

    const classes = useStyles();
    const buttonstyle = styleforbutton();
    const dropdownstyle = stylefordropdown();
    const [position, setPosition] = React.useState('');
    const inputLabel = React.useRef([]);
    const [labelWidth, setLabelWidth] = React.useState(0);
    //bug here

    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        props.modifywhere(event.target.value);
        setPosition(event.target.value);
    };
    //bug ended

        if(props.open==true){ 
            return(
                <Card className={classes.root} variant="outlined">

            {props.array1.length > 0 ? (
                <React.Fragment>

                    <h2 className="bg-primary text-white  p-2" > Get </h2>
                    <CardActions>
                        <FormControl variant="outlined" className={dropdownstyle.formControl}>
                            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label"          >
                                Position
          </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={position}
                                onChange={handleChange}
                                labelWidth={labelWidth}
                            >
                                <MenuItem
                                    value="top">Top</MenuItem>
                                <MenuItem value="bottom"
                                >Bottom</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={buttonstyle.root} className="p-2" noValidate>
                            {props.result1 && (
                                <TextField
                                    disabled id="standard-disabled" label={props.result1} />)}
                            <Button
                                className="mt-2"
                                onClick={() => {
                                    props.get();
                                }}
                                variant="outlined"
                                color="primary"
                                size="large"
                            >
                                Submit
                    </Button>
                        </FormControl>
                    </CardActions>
                </React.Fragment>) : (<Typography className="bg-primary text-white text-center p-2" variant="h4" component="h2">
                    Empty Stack
                </Typography>)
            }
        </Card>

            )

        }
        
        else

            return( 
                    <div></div>
                )       
    
}
