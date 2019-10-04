import React from 'react';
import Element from '../../ui/Element';
import {Container , Row , Col, Card, CardBody, CardHeader, CardTitle, Button, InputGroup, Input, InputGroupAddon, InputGroupText} from 'reactstrap';

class Range extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
            start: null,
            end: null
        };
    }
    render(){
        return (
            <Card style={{border: '1px solid rgba(22,45,167,0.9)'}}>
                <CardHeader>Primes in Range</CardHeader>
                <CardBody className="text-center">
                    <CardTitle>Range</CardTitle>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Start</InputGroupText>
                        </InputGroupAddon>
                        <Input type="number" placeholder="Start of Range" onChange={(event)=>{this.setState({start: event.target.value})}} value={this.state.start ? this.state.start: ''}/>
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>End</InputGroupText>
                        </InputGroupAddon>
                        <Input type="number" placeholder="End of Range" onChange={(event)=>{this.setState({end: event.target.value})}} value={this.state.end ? this.state.end: ''}/>
                    </InputGroup>
                    <br />
                    <Button onClick={()=>{this.props.parent.sieve(parseInt(this.state.start),parseInt(this.state.end));this.setState({start: null, end: null})}}>Submit</Button>
                </CardBody>
            </Card>
        );
    }
}


export default class Sieve extends React.Component {

    state = {
        numbers: []
    }

    init(start,end){
        let numbers = [],primes = new Set(),nonPrimes = new Set();
        for( let num = start; num <= end; num++){
            if( num >= 2)
                numbers.push({value: num, prime: true});
            else
                numbers.push({value: num, prime: false});
        }
        for( let p = 2; p*p <= end; p++){
            if(!nonPrimes.has(p)){
                primes.add(p);
                for( let x = 2*p; x <= end; x += p){
                    nonPrimes.add(x);
                }
            }
        }
        return {numbers,primes};
    }

    sieve(start,end){
        if( start && end && start >= 2 && start <= end){
            if( (start-end) >= 1000001 || end > 1000000000){
                alert("Too big rage not supported yet");
                return ;
            }
            let {numbers,primes} = this.init(start,end);
            for( const prime of primes){
                let s = start % prime;
                if( s ){
                    s = prime - s;
                }
                if( prime !== numbers[s].value){
                    numbers[s].prime = false;
                }
                
                for( s = s + prime; s <= (end-start); s += prime){
                    numbers[s].prime = false;
                }
            }
            this.setState({numbers});
        } else {
            alert("Invalid Range or No primes in Range");
        }
    }

    render(){
        return (
            <Container>
                <Row className="text-center">
                    <Col sm={6}>
                        <Range parent={this}/>
                    </Col>
                </Row>
                <Row className="mt-4 mb-4">
                    {
                        this.state.numbers.map((data,index)=>{
                            let highlight = data.prime || false,value = data.value;
                            return <Element highlight = {highlight} key={value+"-"+index} data={{value,index}} type="array" />
                        })
                    }
                </Row>
            </Container>
        );
    }
}
