import React from 'react';
import Element from '../../ui/Element';
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
                    <Button onClick={()=>{this.props.parent.insert(this.state.data,this.state.where); this.setState({data: null})}}>Submit</Button>
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
                    </InputGroup>
                    <br />
                    <span>Or</span>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>Value</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Value" onChange={(event)=>{this.setState({data: event.target.value})}} value={this.state.data ? this.state.data : ''}/>
                    </InputGroup>
                    <br />
                    <Button onClick={()=>{this.props.parent.delete(this.state.data,this.state.where); this.setState({data: null})}}>Submit</Button>
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


export default class Array extends React.Component {

    state = {
        array: [],
        highlights: []
    }

    insert(data,where){
        if(data){
            let arr = this.state.array;
            switch(where.toLowerCase()){
                case 'start':
                    arr.splice(0,0,[data]);
                    break;
                case 'end':
                default:
                    arr.splice(arr.length,0,[data]);
            }
            this.setState({array: arr, highlights: []});    
        } else {
            alert('Submission is empty');
        }
    }

    delete(data,where){
        let arr = [];
        if(data){
            arr = this.state.array;
            arr = arr.filter((value)=>{
                return value != data;
            });
            this.setState({array: arr, highlights: []});
        } else {
            arr = this.state.array;
            switch(where.toLowerCase()){
                case 'start':
                    arr.splice(0,1);
                    break;
                case 'end':
                    arr.splice(arr.length-1,1);
                    break;
                default:
            }
            this.setState({array: arr, highlights: []});
        }
    }

    update(position,value){
        if( position && value && parseInt(position) <= this.state.array.length - 1 && parseInt(position) >= 0){
            let arr = this.state.array, highlights = [];
            arr[position] = value;
            highlights.push(parseInt(position));
            this.setState({array: arr, highlights});
        } else {
            alert("Cannot update");
        }
    }

    search(data){
        if(data){
            let arr = this.state.array,highlights = [];
            arr.map((value,index)=>{
                if(value == data){
                    highlights.push(parseInt(index));
                }
                return value == data;
            });
            this.setState({highlights});
        }else{
            alert("Empty Search");
        }
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col sm={3}>
                        <Insert parent={this}/>
                    </Col>
                    <Col sm={3}>
                        <Delete parent={this}/>
                    </Col>
                    <Col sm={3}>
                        <Update parent={this} />
                    </Col>
                    <Col sm={3}>
                        <Search parent={this} />
                    </Col>
                </Row>
                <Row className="mt-4 mb-4">
                    {
                        this.state.array.map((value,index)=>{
                            let highlight = false;
                            if( this.state.highlights.includes(index)){
                                highlight = true;
                            }
                            return <Element highlight = {highlight} key={value+"-"+index} data={{value,index}} type="array" />
                        })
                    }
                </Row>
            </Container>
        );
    }
}