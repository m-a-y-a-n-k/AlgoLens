import React from 'react';
import Element from '../../ui/Element';
import {Container , Row , Col, Card, CardBody, CardHeader, CardTitle, Button, InputGroup, Input, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class Push extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          data: null,
        };
    }

    render(){
        return (
            <Card style={{border: '1px solid rgba(22,45,167,0.9)'}}>
                <CardHeader>Push</CardHeader>
                <CardBody className="text-center">
                    <CardTitle>Insert Element at Top</CardTitle>
                    <br />
                    <InputGroup>
                        <Input onChange={(event)=>{this.setState({data: event.target.value})}} value={this.state.data ? this.state.data : ''}/>
                    </InputGroup>
                    <br />
                    <Button onClick={()=>{this.props.parent.push(this.state.data); this.setState({data: null})}}>Submit</Button>
                </CardBody>
            </Card>
        );
    }
}

class Pop extends React.Component{

    render(){
        return (
            <Card style={{border: '1px solid rgba(22,45,167,0.9)'}}>
                <CardHeader>Pop</CardHeader>
                <CardBody className="text-center">
                    {
                        this.props.parent.state.array.length > 0
                        ?
                        (
                            <React.Fragment>
                                <CardTitle>Remove Element at Top</CardTitle>
                                <br />
                                <Button onClick={()=>{this.props.parent.pop();}}>Submit</Button>
                            </React.Fragment>                    
                        )
                        :
                        <CardTitle>Empty Stack</CardTitle>
                    }
                    </CardBody>
            </Card>
        );
    }
}

class Get extends React.Component{

    constructor(props) {
        super(props);
    
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
          dropdownOpen: false,
          where: 'Top',
          result: null
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
                <CardHeader>Get</CardHeader>
                <CardBody className="text-center">
                    {
                        this.props.parent.state.array.length > 0
                        ?
                        (
                            <React.Fragment>
                                <CardTitle>Peek Element</CardTitle>
                                <InputGroup>
                                    <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                                        <DropdownToggle caret>
                                            {this.state.where}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem onClick={()=>{this.setState({where: 'Top'})}}>Top</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={()=>{this.setState({where: 'Bottom'})}}>Bottom</DropdownItem>
                                        </DropdownMenu>
                                    </InputGroupButtonDropdown>
                                    {
                                        this.state.result &&
                                        <Input disabled value={this.state.result}/>
                                    }
                                </InputGroup>    
                                <br />
                                <Button onClick={()=>{let result = this.props.parent.peek(this.state.where); this.setState({result})}}>Submit</Button>
                            </React.Fragment>  
                        )
                        :
                        (
                            <CardTitle>Empty Stack</CardTitle>                
                        )
                    }
                </CardBody>
            </Card>
        );
    }
}

export default class Stack extends React.Component {

    state = {
        array: [],
        highlights: []
    }

    push(data){
        if(data){
            let arr = this.state.array;
            arr.splice(0,0,data);
            this.setState({array: arr, highlights: [0]});    
        } else {
            alert('Nothing to Push');
        }
    }

    pop(){
        let arr = this.state.array;
        arr.splice(0,1);
        this.setState({array: arr, highlights: []});
    }

    peek(where){
        let arr = this.state.array;
        switch(where.toLowerCase()){
            case 'top':
                this.setState({highlights: [0]});
                return arr[0];
            case 'bottom':
                this.setState({highlights: [arr.length-1]});
                return arr[arr.length-1];
            default: 
        }
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col sm={4}>
                        <Push parent={this}/>
                    </Col>
                    <Col sm={4}>
                        <Pop parent={this}/>
                    </Col>
                    <Col sm={4}>
                        <Get parent={this} />
                    </Col>
                </Row>
                <Row className="mt-4 mb-4">
                    {
                        this.state.array.map((value,index)=>{
                            let highlight = false;
                            if( this.state.highlights.includes(index)){
                                highlight = true;
                            }
                            return (
                                <Element highlight = {highlight} key={value+"-"+index} data={{value,index}} type="stack" />
                            )
                        })
                    }
                </Row>
            </Container>
        );
    }
}