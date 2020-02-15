 import React,{useState} from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { Input } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';


import {
  fade,
  
  
  makeStyles
 
} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';




//import Element from '../../ui/Element';

const useStyles = makeStyles({
  root: {
    minWidth: 75,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 8px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles(theme => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);


//---------- working on input -----
  
  
  
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
  
 
  



  //***** styling the input  */

  






 export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [anchorEl, setAnchorEl] = React.useState(null);
const[btntext,setBtntext]=React.useState("start")
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    alert(event.currentTarget.id);
  };

  const handleClose = () => {

    setAnchorEl(null);
  };

let head = "naman";

    return (

        

    <div>   



        <Card className={classes.root}>
       
        <CardContent>
        <Typography variant="h5" component="h2">
         Enter the data
       </Typography>
       
       <RedditTextField
        label="Element"
        className={classes.margin}
        
        variant="filled"
        id="reddit-input"
      />

        </CardContent>
    
    <CardActions>
    <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        { btntext }
      </Button>

      
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={()=>{ 
                handleClose();
                setBtntext("START")}} >
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText  primary="Start" />
        </StyledMenuItem>
        <StyledMenuItem
         onClick={()=>{
            handleClose();
            setBtntext("END")}}
        
        >
          <ListItemIcon>
            <DraftsIcon 
             primary="End" 
            fontSize="small" />
          </ListItemIcon>
          <ListItemText  primary="End" />
        </StyledMenuItem>
      
      </StyledMenu>
    
  );
}
   
        
     </CardActions>
     
   </Card> 
   




    </div>
        );
}


 



  

 {/* 


export default function  LinkedList {
    const [head,setHead]=useState(null);

    // clear function 
    clear= ()=>{
        let head = head,curr = {...head};
        while(curr){
            curr.highlight = false;
            curr = curr.next; 
        }
        setHead(head);
    }
    
     insert=(data,where)=>{
        if(data){
        
            clear();    
            let head = head, newNode = {info: data, next: null, highlight: false}, curr;
            if( !head ){
                setHead({head: {...newNode}});
            } else {
                switch(where.toLowerCase()){
                    case 'start':
                        newNode.next = head;
                        setHead( ...newNode);      
                        break;
                    case 'end':
                    default:
                        curr = head;
                        while(curr.next){
                            curr = curr.next;
                        }
                        curr.next = newNode;
                        setHead( ...head);
                }    
            }
        } else {
            alert('Empty Insert');
        }
    }
    
     delete =(data,where,position)=>{
        let head = head,curr = head;
        if(head){
            clear();    
            if(data){
                while( head && head.info == data){
                    head = head.next;
                    curr = head;
                }
                while(curr && curr.next){
                    if( curr.next.info == data){
                        curr.next = curr.next.next;
                    }
                    curr = curr.next;
                }
                setHead(head);
            } else if(position){
                if( position === 0){
                    head = head.next;
                } else {
                    while(--position > 0 && curr){
                        curr = curr.next;
                    }
                    if( curr && curr.next ){
                        curr.next = curr.next.next;
                    } else {
                        alert("No element to delete");
                    }
                }
                setHead(head);
            }
            else{
                switch(where.toLowerCase()){
                    case 'start':
                           head = head.next;
                        break;
                    case 'end':
                            while(curr && curr.next && curr.next.next){
                                curr = curr.next;
                            }
                            if( curr && curr.next ){
                                curr.next = curr.next.next;
                            }
                        break;
                    default:
                }
                setHead(head);
            }
        } else {
            alert("List is empty");
        }
    }
    
     update=(position,value)=>{
        if( position && value && parseInt(position) >= 0){
            clear();
            let head = head, curr = head;
            while(curr && --position >= 0){
                curr = curr.next;
            }
            if(curr){
                curr.info = value;
                curr.highlight = true;
                setHead(head);
            } else {
                alert('Position out of bounds');
            }
        } else {
            alert("Cannot update");
        }
    }
    
    search=(data)=>{
        if(data){
            clear();
            let head = head, curr = head;
            while(curr){
                if( curr.info == data){
                    curr.highlight = true;
                }
                curr = curr.next;
            }
            setHead(head);
        }else{
            alert("Empty Search");
        }
    }
    
    //-----------------content of render function ------------------------------------
    
    let list = [];
            if(this.state.head){
                let curr = head,key = 0;
                while(curr){
                    if(curr.next){
                        list.push(<Element key={key + "-" + curr.info} data={{value: curr.info}} type="LinkedList" next={true} highlight={curr.highlight}/>);
                    } else {
                        list.push(<Element key={key + "-" + curr.info} data={{value: curr.info}} type="LinkedList" next={false} highlight={curr.highlight}/>);
                    }
                    curr = curr.next;
                    key++;
                }
            }

            return(<Container>
                <Row>
                    <Col sm={3}>
                        <Insert/>
                    </Col>
                    <Col sm={4}>
                        <Delete/>
                    </Col>
                    <Col sm={3}>
                        <Update  />
                    </Col>
                    <Col sm={2}>
                        <Search  />
                    </Col>
                </Row>
                <Row className="mt-4 mb-4">
                    {list}
                </Row>
            </Container>


            )   ;         
            
        }  */  }