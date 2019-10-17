import React from 'react';
import Element from '../../ui/Element';
import { Container, Row, Col, Card, CardBody, CardHeader, CardTitle, Button, InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FaEquals, FaTimes } from 'react-icons/fa';

class Inp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            base: null,
            power: null
        };
    }
    render() {
        return (
            <Card style={{ border: '1px solid rgba(22,45,167,0.9)' }}>
                <CardHeader>Exponentiation Of Number</CardHeader>
                <CardBody className="text-center">
                    <CardTitle>Base and Power</CardTitle>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Base</InputGroupText>
                        </InputGroupAddon>
                        <Input disabled={this.props.parent.state.disabled} type="number" placeholder="Base" onChange={(event) => { this.setState({ base: event.target.value }) }} value={this.state.base ? this.state.base : ''} />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Exponent</InputGroupText>
                        </InputGroupAddon>
                        <Input disabled={this.props.parent.state.disabled} type="number" placeholder="Power" onChange={(event) => { this.setState({ power: event.target.value }) }} value={this.state.power ? this.state.power : ''} />
                    </InputGroup>
                    <br />
                    <Button disabled={this.props.parent.state.disabled} onClick={() => { this.props.parent.expo(parseFloat(this.state.base), parseInt(this.state.power)); this.setState({ base: null, power: null }); }}>Submit</Button>
                </CardBody>
            </Card>
        );
    }
}


export default class Exponent extends React.Component {

    state = {
        result: [],
        base: null,
        power: null,
        disabled: false,
        ans: null
    }

    power(power) {
        if (power > 0)
            this.setState((prevState => {
                let ans, result = [...prevState.result], disabled,p;
                for (p = 0; p < power - 1; p += 2) {
                    result[p / 2] = result[p] * result[p + 1];
                }
                if(power % 2 === 1){
                    result[p/2]=result[power-1];
                }
                if (result.length === 1) {
                    ans = result[0];
                    result.length = 0;
                    disabled = false;
                } else {
                    disabled = true;
                    result.length = Math.ceil(power / 2);
                }
                return { result, disabled, ans };
            }), () => {
                setTimeout(() => {
                    this.power((!this.state.ans) ? Math.ceil(power / 2) : 0);
                }, 1200);
            });
    }

    expo(base, power) {
        let result = [...this.state.result];
        for (let p = 0; p < power; p++) {
            result.push(base);
        }
        this.setState({
            result,
            base,
            power,
            disabled: true
        }, () => {
            setTimeout(() => {
                this.power(power);
            }, 500);
        });
    }

    render() {
        return (
            <Container>
                <Row className="text-center">
                    <Col sm={6}>
                        <Inp parent={this} />
                    </Col>
                </Row>
                <Row className="text-center mt-4 mb-4">
                    {this.state.base && this.state.power &&
                        <React.Fragment>
                            <Element highlight={true} data={{ value: `${this.state.base} ^ ${this.state.power}` }} type="Array" />
                            <FaEquals style={{ margin: 'auto 5px' }} />
                        </React.Fragment>
                    }
                    {
                        this.state.result.length >= 1 && this.state.disabled &&
                        this.state.result.map((value, index, result) => {
                            if (index > 0) {
                                return <React.Fragment key={"res_mul_val_" + index}>
                                    <FaTimes style={{ margin: 'auto 5px' }} />
                                    <Element data={{ value }} type="Array" />
                                </React.Fragment>
                            } else {
                                let highlight;
                                if (result.length === 1) {
                                    highlight = true;
                                } else {
                                    highlight = false;
                                }
                                return <Element key="first_val" highlight={highlight} data={{ value }} type="Array" />
                            }
                        })
                    }
                    {
                        !this.state.disabled && this.state.ans &&
                        <Element key="result" highlight={true} data={{ value: this.state.ans }} type="Array" />
                    }
                </Row>
            </Container>
        );
    }
}
