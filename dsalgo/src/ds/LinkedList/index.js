import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import{Row,Col,Container}from 'reactstrap';
import Typography from '@material-ui/core/Typography';

import Element from '../../ui/Element';


import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


//styling the form and component
const useStyles = makeStyles(theme=>({
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
    marginBottom: 175,
    marginTop:33    
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
  const useStylesReddit = makeStyles(theme => ({
    root: {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      margin: '4px 0px 0px 0px', 
      
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
  
  // handling input field
  function RedditTextField(props) {
    const classes = useStylesReddit();
    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
  }

  // Insert component --------------------------------------------------------------------------------------
 function Insert(props) {
  ///--------- Select the start or end input type ------------
  const classes1 = useStyles();
  const [where, setWhere] = React.useState('');
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setWhere(event.target.value);
    alert(where+ "hey see the change");
  };
  //-----------------------------------------------------------
  const classes = useStyles();
  const [data,setData]=React.useState(null);  // stores the data entered in the list 

    return ( 
     <Card className={classes.root} style={{border: '1px solid rgba(22,45,167,0.9)'}} >
       
        <CardContent className="bg-primary text-white">
        <Typography variant="h5" component="h2">Insert</Typography>
        </CardContent>

        <CardContent className=" text-center pb-0 mt-0">
        <Typography  variant="h6" component="h2">Enter data</Typography>
        </CardContent>


       <CardActions>

         <FormControl variant="outlined" className={classes1.formControl}>
                   
             <InputLabel  ref={inputLabel} id="demo-simple-select-outlined-label">
                Position
             </InputLabel>
                 <Select 
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={where}
                  onChange={handleChange}
                  labelWidth={labelWidth}
                  >
          
                      <MenuItem  value={'start'}>Start</MenuItem>
                      <MenuItem value={'end'}>End</MenuItem>
        
                  </Select>


             <RedditTextField
                            
              label="Enter Data"
              className={classes.margin}
              onChange={(event)=> {setData(event.target.value) }}
              value={data ? data : ''}
              variant="filled"
              id="reddit-input"
            />

                 <Button className="mt-2" 
                 onClick={()=>{ props.insert(data,where);    // calling the insert function of the LinkList compoent  
                               setData(null); 
                   }}
                     variant="outlined" color="primary">
                   Submit
                 </Button>


      </FormControl>   

  </CardActions>
     
   </Card>  );
}

function Delete(props){
  ///--------- Select the start or end input type ------------
  const classes1 = useStyles();
  const [where, setWhere] = React.useState('');
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setWhere(event.target.value);
    alert(where+ "hey see the change");
  };

//-----------------------------------------------------------------

  const classes = useStyles();

  const [data,setData]=React.useState(null);  // stores the data entered in the list 

  const [position,setPosition]=React.useState(null); //position    
    return ( 
  <Card className={classes.root} style={{border: '1px solid rgba(22,45,167,0.9)'}} >
          <CardContent className="bg-primary text-white " >
                    
                    
                    <Typography variant="h5" component="h2"> Delete</Typography>

         </CardContent>

           <CardContent className=" text-center pb-0 mt-0">
               <Typography  variant="h6" component="h2">Position or value</Typography>
            </CardContent>

    
    <CardActions >
          <FormControl  variant="outlined" className={classes1.formControl}>
                   <InputLabel  ref={inputLabel} id="demo-simple-select-outlined-label">
                      Position
                   </InputLabel>
                    
                       <Select  
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={where}
                        onChange={handleChange}
                        labelWidth={labelWidth}
                        >
          
                            <MenuItem  value={'start'}>Start</MenuItem>
                            <MenuItem value={'end'}>End</MenuItem>
        
                        </Select>

                      <Typography className="text-center" >Or</Typography>
                          
                          <RedditTextField
                          className="w-50"
                          label="Index"
                         
                          className={classes.margin}
                           onChange={(event)=> {setPosition(event.target.value)}}
                           value={position ? position : ''}
                            variant="filled"
                            id="reddit-input"
                            />



                           <Typography className="text-center" variant="h6"> Or </Typography>                        
                             <RedditTextField
                               label="Value"
                               className={classes.margin}
                              onChange={(event)=> {setData(event.target.value)  }}
                              value={data ? data : ''}
                               variant="filled"
                               id="reddit-input"
                              />   


                          <Button 
                              className="mt-2"
                              onClick={()=>{props.delete1(data,where,parseInt(position));    // calling the insert function of the LinkList compoent  
                              setData(null);
                              setPosition(null);    }}
                              variant="outlined" color="primary">
                             Submit
                          </Button>

              </FormControl>
     </CardActions> 
     
   </Card> );

}

function Update (props){

  const classes = useStyles();
  const [data,setData]=React.useState(null);  // stores the data entered in the list 
  const [position,setPosition]=React.useState(null); //position    
  const classes1 = useStyles();
  

 
    return ( 
        <Card className={classes.root} style={{border: '1px solid rgba(22,45,167,0.9)'}} >
       
                <CardContent className="bg-primary text-white">
                       <Typography  variant="h5" component="h2">Update</Typography>
                </CardContent>  

                <CardContent className=" text-center pb-0 mt-0">
                     <Typography  variant="h6" component="h2">Value at position</Typography>
                </CardContent>
                             
    
               <CardActions  >

                        <FormControl  variant="outlined" className={classes1.formControl}>
                        
                  
                               <RedditTextField
                                label="Index"
                                className={classes.margin}
                                onChange={(event)=> {setPosition(event.target.value)}}
                                 value={position ? position : ''}
                                 variant="filled"
                                 id="reddit-input"
                              />
                      
                      
       
                              <RedditTextField
                                label="Value"
                                className={classes.margin}
                                onChange={(event)=> {setData(event.target.value) }}
                                value={data ? data : ''}
                                variant="filled"
                                id="reddit-input"
                               />   
                             

                               <Button onClick={()=>{
                                   props.update(position,data);    // calling the insert function of the LinkList compoent  
                                   setData(null);
                                   setPosition(null); }}
                                   className="mt-2"
                                   variant="outlined" color="primary">

                                    Submit
                               </Button>
      
               </FormControl>
        
        </CardActions>
  </Card>);
}

function Search (props){

  const classes1 = useStyles(); //style for formcontrol
  const classes = useStyles(); // style for card component 
  const [data,setData]=React.useState(null);  // stores the data entered in the list 
  const [position,setPosition]=React.useState(null);    
  
    return ( 

      <Card className={classes.root} style={{border: '1px solid rgba(22,45,167,0.9)'}} > 
                <CardContent className="  bg-primary text-white">
                     <Typography variant="h5" component="h2"> Search </Typography>
                  </CardContent>
    
                  <CardContent className="text-center pb-0 mt-0">
                       <Typography  variant="h6" component="h2">Data</Typography>
                </CardContent>

               <CardActions>
                     <FormControl  variant="outlined" className={classes1.formControl}>
              
                           <RedditTextField
                            label="Value"
                            className={classes.margin}
                            onChange={(event)=> {setData(event.target.value)}}
                            value={data ? data : ''}
                            variant="filled"
                            id="reddit-input"
                             />   
                            
                      
                             <Button  onClick={()=>{props.search(position,data);    // calling the insert function of the LinkList compoent  
                                            setData(null);  }}
                                variant="outlined" color="primary" 
                                className="mt-2"
                                >
                                 Submit
                              </Button>
                
                           </FormControl>     
                   </CardActions>
     
   </Card> );
  

}
export default function LinkedList () {
    
  const [head,setHead]=useState(null); 

    // clear function --------------------------------------------
   let clear= ()=>{
        let head1 = head;
        let curr = {...head};
        while(curr){
            curr.highlight = false;
            curr = curr.next; 
        }
        setHead(head1);
    }
  // insert--------------------------------------------------------  
   let  insert=(data,btntext)=>{
        if(data){
        
            clear();    
          let  newNode = {info: data, next: null, highlight: false}, curr;
                     if( !head ){
                           setHead({...newNode});
                      } 

                      else {
              
                           switch(btntext){ // to lowercase() is not working here 
                                              // console statements are giving "Undefined object"  
                                           case 'start':
                                                        newNode.next = head;
                                                        setHead( {...newNode });      
                                                        break;
                                            case 'end':
                                                default:
                                                      curr = head;
                                                        while(curr.next){
                                                            curr = curr.next;
                                                        }
                                                            curr.next = newNode;
                                                            setHead({...head});
                                            }    
                             }
        }
         else {
            alert('Empty Insert');
        }
    }
 //----------Using "delet1" instead of delete is some keyword   
    let delete1=(data,where,position)=>{
        let head1 = head,curr = head;
          if(head1){
              clear();    
                  if(data){
                       while( head1 && head1.info == data){
                                head1 = head1.next;
                                curr = head1;
                           }
                         while(curr && curr.next){
                            if( curr.next.info == data){
                              curr.next = curr.next.next;
                          }
                       curr = curr.next;
                  }
                  setHead(head1);
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
                setHead(head1);
            }
            else{
                switch(where){   //to lower case is not working 
                    case 'start':
                           head1 = head1.next;
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
                setHead(head1);
            }
        } else {
            alert("List is empty");
        }
    }
    //Update------------------------------------------------------
    let update=(position,value)=>{
        if( position && value && parseInt(position) >= 0){
            clear();
            let head1 = head, curr = head;
            while(curr && --position >= 0){
                curr = curr.next;
            }
            if(curr){
                curr.info = value;
                curr.highlight = true;
                setHead(head1);
            } else {
                alert('Position out of bounds');
            }
        } else {
            alert("Cannot update");
        }
    }


   // Seacrh---------------------------------------------------- 
 
   let search=(data)=>{
        if(data){
            clear();
            let head1 = head, curr = head;
            while(curr){
                if( curr.info == data){
                    curr.highlight = true;
                }
                curr = curr.next;
            }
            setHead(head1);
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
                    <Col sm={3}>
                        <Delete delete1={(params)=>{delete1(params)}}/>
                    </Col>
                    <Col sm={3}>
                        <Update  update={(params)=>{update(params)}}  />
                    </Col>
                    <Col sm={2}>
                        <Search search={(params)=>{search(params)}} />
                    </Col>
                </Row>
                <Row className="mt-4 mb-4">
                    {list}
                </Row>
            </Container>


            )   ;         
            
        }  