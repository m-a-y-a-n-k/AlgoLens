import React from 'react';
import Element from '../../../ui/Element';
import {Container , Row , Col, Card, CardBody, CardHeader, CardTitle, Button, InputGroup, Input, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroupAddon, InputGroupText} from 'reactstrap';

class Insert extends React.Component{

    constructor(props) {
        super(props);
    
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
          dropdownOpen: false,
          data: null,
          where: 'Start'
        };
    }

    toggleDropDown() {
        let dropdownOpen = this.state.dropdownOpen;
        this.setState({
          dropdownOpen: !dropdownOpen
        });
    }    

    render(){
        return (
            <Card style={{border: '1px solid rgba(22,45,167,0.9)'}}>
                <CardHeader>Insert</CardHeader>
                <CardBody className="text-center">
                    <CardTitle>Enter data</CardTitle>
                    <br />
                    <InputGroup>
                    <Input onChange={(event)=>{this.setState({data: event.target.value})}} value={this.state.data ? this.state.data : ''}/>
                    <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                        <DropdownToggle caret>
                            {this.state.where}
                        </DropdownToggle>
                        <DropdownMenu>
                        <DropdownItem onClick={()=>{this.setState({where: 'Start'})}}>Start</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={()=>{this.setState({where: 'End'})}}> End</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                    </InputGroup>
                    <br />
                    <Button 
                        onClick={()=>{
                            this.props.parent.insert(this.state.data,this.state.where); 
                            this.setState({data: null})
                        }}>
                            Submit
                    </Button>
                </CardBody>
            </Card>
        );
    }
}

class Delete extends React.Component{

    constructor(props) {
        super(props);
    
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
          dropdownOpen: false,
          data: null,
          where: 'Start',
          position: null
        };
    }

    toggleDropDown() {
        let dropdownOpen = this.state.dropdownOpen;
        this.setState({
          dropdownOpen: !dropdownOpen
        });
    }    

    render(){
        return (
            <Card style={{border: '1px solid rgba(22,45,167,0.9)'}}>
                <CardHeader>Delete</CardHeader>
                <CardBody className="text-center">
                    <CardTitle>Position or Value</CardTitle>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Position</InputGroupText>
                    </InputGroupAddon>
                    <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                        <DropdownToggle caret>
                            {this.state.where}
                        </DropdownToggle>
                        <DropdownMenu>
                        <DropdownItem onClick={()=>{this.setState({where: 'Start'})}}>Start</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={()=>{this.setState({where: 'End'})}}> End</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                    <span className="ml-2 mr-2">Or</span>
                    <Input type="number" placeholder="Position" onChange={(event)=>{this.setState({position: event.target.value})}} value={this.state.position ? this.state.position : ''}/>
                    </InputGroup>
                    <br />
                    <div>Or</div>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>Value</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Value" onChange={(event)=>{this.setState({data: event.target.value})}} value={this.state.data ? this.state.data : ''}/>
                    </InputGroup>
                    <br />
                    <Button onClick={()=>{this.props.parent.delete(this.state.data,this.state.where, parseInt(this.state.position)); this.setState({data: null, position: null})}}>Submit</Button>
                </CardBody>
            </Card>
        );
    }
}

class Update extends React.Component{

    constructor(props) {
        super(props);
    
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
          dropdownOpen: false,
          data: null,
          position: null
        };
    }

    toggleDropDown() {
        let dropdownOpen = this.state.dropdownOpen;
        this.setState({
          dropdownOpen: !dropdownOpen
        });
    }    

    render(){
        return (
            <Card style={{border: '1px solid rgba(22,45,167,0.9)'}}>
                <CardHeader>Update</CardHeader>
                <CardBody className="text-center">
                    <CardTitle>Value at Position</CardTitle>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Position</InputGroupText>
                        </InputGroupAddon>
                        <Input type="number" placeholder="Position" onChange={(event)=>{this.setState({position: event.target.value})}} value = {this.state.position ? this.state.position :''}/>
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Value</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Value" onChange={(event)=>{this.setState({data: event.target.value})}} value={this.state.data ? this.state.data : ''}/>
                    </InputGroup>
                    <br />
                    <Button onClick={()=>{this.props.parent.update(this.state.position,this.state.data); this.setState({position: null, data: null})}}>Submit</Button>
                </CardBody>
            </Card>
        );
    }
}

class Search extends React.Component{

    constructor(props) {
        super(props);
    
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
          dropdownOpen: false,
          data: null
        };
    }

    toggleDropDown() {
        let dropdownOpen = this.state.dropdownOpen;
        this.setState({
          dropdownOpen: !dropdownOpen
        });
    }    

    render(){
        return (
            <Card style={{border: '1px solid rgba(22,45,167,0.9)'}}>
                <CardHeader>Search</CardHeader>
                <CardBody className="text-center">
                    <CardTitle>Data</CardTitle>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Value</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Value" onChange={(event)=>{this.setState({data: event.target.value})}} value={this.state.data ? this.state.data: ''}/>
                    </InputGroup>
                    <br />
                    <Button onClick={()=>{this.props.parent.search(this.state.data);this.setState({data: null})}}>Submit</Button>
                </CardBody>
            </Card>
        );
    }
}


export default class LinkedList extends React.Component {

    state = {
        head: null
    }

    clear(){
        let head = this.state.head,curr = {...head};
        while(curr){
            curr.highlight = false;
            curr = curr.next; 
        }
        this.setState({head});
    }

    insert(data,where){
        if(data){
        
            this.clear();    
            let head = this.state.head, newNode = {info: data, next: null, highlight: false}, curr;
            if( !head ){
                this.setState({head: {...newNode}});
            } else {
                switch(where.toLowerCase()){
                    case 'start':
                        newNode.next = head;
                        this.setState({head: {...newNode}});      
                        break;
                    case 'end':
                    default:
                        curr = head;
                        while(curr.next){
                            curr = curr.next;
                        }
                        curr.next = newNode;
                        this.setState({head: {...head}});
                }    
            }
        } else {
            alert('Empty Insert');
        }
    }

    delete(data,where,position){
        let head = this.state.head,curr = head;
        if(head){
            this.clear();    
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
                this.setState({head});
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
                this.setState({head});
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
                this.setState({head});
            }
        } else {
            alert("List is empty");
        }
    }

    update(position,value){
        if( position && value && parseInt(position) >= 0){
            this.clear();
            let head = this.state.head, curr = head;
            while(curr && --position >= 0){
                curr = curr.next;
            }
            if(curr){
                curr.info = value;
                curr.highlight = true;
                this.setState({head});
            } else {
                alert('Position out of bounds');
            }
        } else {
            alert("Cannot update");
        }
    }

    search(data){
        if(data){
            this.clear();
            let head = this.state.head, curr = head;
            while(curr){
                if( curr.info == data){
                    curr.highlight = true;
                }
                curr = curr.next;
            }
            this.setState({head});
        }else{
            alert("Empty Search");
        }
    }

    render(){
        let list = [];
        if(this.state.head){
            let curr = this.state.head,key = 0;
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

        return (
            <Container>
                <Row>
                    <Col sm={3}>
                        <Insert parent={this}/>
                    </Col>
                    <Col sm={4}>
                        <Delete parent={this}/>
                    </Col>
                    <Col sm={3}>
                        <Update parent={this} />
                    </Col>
                    <Col sm={2}>
                        <Search parent={this} />
                    </Col>
                </Row>
                <Row className="mt-4 mb-4">
                    {list}
                </Row>
            </Container>
        );
    }
}