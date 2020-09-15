
import React, { useState } from "react";
import { makeStyles, fade } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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

//text input field styling 
const useStylesReddit = makeStyles(theme => ({
    root: {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#fcfcfb',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff',
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
    focused: {},
}));
function RedditTextField(props) {
    const classes = useStylesReddit();

    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

const stylefortext = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

//******************************************************************** */


export default function Push(props) {

    let [data, setData] = useState(null);
    const classes = useStyles();
    const inputstyle = stylefortext();
        

if(props.open)
    return (
        <Card className={classes.root}  variant="outlined container" >
            <h2 className="bg-primary text-white  p-2" > Push </h2>
            <CardActions>

                <FormControl className="pb-3 pr-0 pl-2 pt-1">
                    <RedditTextField
                        
                        label="Insert"
                        className={[inputstyle.margin,inputstyle.root]}
                        variant="filled"
                        id="reddit-input"
                        onChange={event => {
                            setData(event.target.value);
                        }}
                        value={data ? data : ""}
                    />
                    <Button

                        className="ml-2 mr-2 "
                        onClick={() => {
                            props.push(data); // calling the del function of the LinkList compoent
                            setData(null);
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
    )

    else 
    return(<div></div>)
}
