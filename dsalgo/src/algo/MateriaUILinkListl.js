 import React,{useState} from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import{Row,Col,Container}from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import { Input } from '@material-ui/core';

import Element from '../ui/Element';



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
    minWidth: 3,
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
    marginBottom: 17,
    marginTop:33    
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

  






 function Insert(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [anchorEl, setAnchorEl] = React.useState(null); //used for menu items 

  const[btntext,setBtntext]=React.useState('start'); // store the where state that signifies start or end

  const [data,setData]=React.useState(null);  // stores the data entered in the list 

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {

    setAnchorEl(null);
  };

    return ( 

        <Card className={classes.root} style={{border: '1px solid rgba(22,45,167,0.9)'}} >
       
        <CardContent>
        <Typography variant="h5" component="h2">
         Enter the data
       </Typography>
       
       <RedditTextField
        label="Element"
        className={classes.margin}
        onChange={(event)=> {setData(event.target.value)
                
                    console.log(event.target.value);
        }}
        value={data ? data : ''}
        
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
                setBtntext('start')}} >
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText  primary="Start" />
        </StyledMenuItem>
        <StyledMenuItem
         onClick={()=>{
            handleClose();
            setBtntext('end')}}
        
        >
          <ListItemIcon>
            <DraftsIcon 
             primary="End" 
            fontSize="small" />
          </ListItemIcon>
          <ListItemText  primary="End" />
        </StyledMenuItem>
      
      </StyledMenu>
      <Button 
      onClick={()=>{
        props.insert(data,btntext);    // calling the insert function of the LinkList compoent  
        setData(null);
    
    }}
      variant="outlined" color="primary">
        Submit
      </Button>
  );
}
   
        
     </CardActions>
     
   </Card> 
   




        );
}

function Delete(props){

  
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [anchorEl, setAnchorEl] = React.useState(null); //used for menu items 

  const[btntext,setBtntext]=React.useState("start"); // store the where state that signifies start or end

  const [data,setData]=React.useState(null);  // stores the data entered in the list 

  const [position,setPosition]=React.useState(null); //position    
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {

    setAnchorEl(null);
  };

let head = "naman";

    return ( 

        <Card className={classes.root} style={{border: '1px solid rgba(22,45,167,0.9)'}} >
       
        <CardContent>
        <Typography variant="h5" component="h2">
         Delete
       </Typography>
       <Typography variant="h5" component="h2">
         POSITION OR value
       </Typography>
       
       
       
       
       <RedditTextField
        label="pOSITiON"
        className={classes.margin}
        onChange={(event)=> {setPosition(event.target.value)
                
                    console.log(event.target.value);
        }}
        value={position ? position : ''}
        
        variant="filled"
        id="reddit-input"
      />

       
<RedditTextField
        label="Value"
        className={classes.margin}
        onChange={(event)=> {setData(event.target.value)
                
                    console.log(event.target.value);
        }}
        value={data ? data : ''}
        
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
      <Button 
      onClick={()=>{
        this.props.parent.delete1(data,btntext,parseInt(position));    // calling the insert function of the LinkList compoent  
        setData(null);
        setPosition(null);
    
    }}
      variant="outlined" color="primary">
        Submit
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
   




        );

}

function Update (props){

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [anchorEl, setAnchorEl] = React.useState(null); //used for menu items 

  const[btntext,setBtntext]=React.useState("start"); // store the where state that signifies start or end

  const [data,setData]=React.useState(null);  // stores the data entered in the list 

  const [position,setPosition]=React.useState(null); //position    
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {

    setAnchorEl(null);
  };

let head = "naman";

    return ( 

        <Card className={classes.root} style={{border: '1px solid rgba(22,45,167,0.9)'}} >
       
        <CardContent>
        <Typography variant="h5" component="h2">
        Update
       </Typography>
       <Typography variant="h5" component="h2">
         POSITION OR value
       </Typography>
       
       
       
       
       <RedditTextField
        label="pOSITiON"
        className={classes.margin}
        onChange={(event)=> {setPosition(event.target.value)
                
                    console.log(event.target.value);
        }}
        value={position ? position : ''}
        
        variant="filled"
        id="reddit-input"
      />

       
<RedditTextField
        label="Value"
        className={classes.margin}
        onChange={(event)=> {setData(event.target.value)
                
                    console.log(event.target.value);
        }}
        value={data ? data : ''}
        
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
      <Button 
      onClick={()=>{
        this.props.parent.update(position,data);    // calling the insert function of the LinkList compoent  
        setData(null);
        setPosition(null);
    
    }}
      variant="outlined" color="primary">
        Submit
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
   




        );


}

function Search (props){

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [anchorEl, setAnchorEl] = React.useState(null); //used for menu items 

  const[btntext,setBtntext]=React.useState("start"); // store the where state that signifies start or end

  const [data,setData]=React.useState(null);  // stores the data entered in the list 

  const [position,setPosition]=React.useState(null);    
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {

    setAnchorEl(null);
  };

let head = "naman";

    return ( 

        <Card className={classes.root} style={{border: '1px solid rgba(22,45,167,0.9)'}} >
       
        <CardContent>
        <Typography variant="h5" component="h2">
        Search 
       </Typography>
       
       
<RedditTextField
        label="Value"
        className={classes.margin}
        onChange={(event)=> {setData(event.target.value)
                
                    console.log(event.target.value);
        }}
        value={data ? data : ''}
        
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
      <Button 
      onClick={()=>{
       this.props.parent.search(position,data);    // calling the insert function of the LinkList compoent  
        setData(null);
       
    }}
      variant="outlined" color="primary">
        Submit
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
   




        );
  

}

 



  

 


export default function LinkedList () {
    const [head,setHead]=useState(null);

    // clear function 
   let clear= ()=>{
        let head1 = head;
        let curr = {...head};
        while(curr){
            curr.highlight = false;
            curr = curr.next; 
        }
        setHead(head1);
    }
    
   let  insert=(data,btntext)=>{
        if(data){
        
            clear();    
            let  newNode = {info: data, next: null, highlight: false}, curr;
            if( !head ){
                setHead({...newNode});
            } else {
                switch(btntext.toLowerCase()){
                    case 'start':
                     console.log("i am in start "+ btntext);
                        newNode.next = head;
                        setHead( {...newNode });      
                        break;
                    case 'end':
                      console.log("i  am in end "+btntext);
                    default:
                      console.log("iam in default"+ btntext);
                        curr = head;
                        while(curr.next){
                            curr = curr.next;
                        }
                        curr.next = newNode;
                        setHead({...head});
                }    
            }
        } else {
            alert('Empty Insert');
        }
    }
    
    let delete1 =(data,where,position)=>{
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
    
    let update=(position,value)=>{
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
    
  let search=(data)=>{
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
            if(head){
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
                        <Insert insert={(params)=>{insert(params)} }/>
                    </Col>
                    <Col sm={4}>
                        <Delete parent={this}/>
                    </Col>
                    <Col sm={3}>
                        <Update parent={this}  />
                    </Col>
                    <Col sm={2}>
                        <Search parent={this} />
                    </Col>
                </Row>
                <Row className="mt-4 mb-4">
                    {list}
                </Row>
            </Container>


            )   ;         
            
        }  