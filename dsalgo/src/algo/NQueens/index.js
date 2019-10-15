import React from 'react';
import Board from '../../ui/Board';
import { Container, Row, Col, Card, CardBody, CardHeader, CardTitle, Button, InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap';

class Inp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: null
        };
    }
    render() {
        return (
            <Card style={{ border: '1px solid rgba(22,45,167,0.9)' }}>
                <CardHeader>Queens on Board</CardHeader>
                <CardBody className="text-center">
                    <CardTitle>Number</CardTitle>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Value</InputGroupText>
                        </InputGroupAddon>
                        <Input type="number" placeholder="Number of Queens on Board" onChange={(event) => { this.setState({ input: event.target.value }) }} value={this.state.input ? this.state.input : ''} />
                    </InputGroup>
                    <br />
                    <Button onClick={() => { this.props.parent.queens(parseInt(this.state.input)); this.setState({ input: null }); }}>Submit</Button>
                </CardBody>
            </Card>
        );
    }
}


export default class NQueens extends React.Component {

    state = {
        queens: [],
        number: 0
    }

    safe(row, col) {
        let queens = this.state.queens, queen;
        let markRow = {}, markCol = {};
        for (let q = 0; q < queens.length - 1; q++) {
            queen = queens[q];
            if (markRow[queen.row] === true || markCol[queen.col] === true || (row !== queen.row && col !== queen.col && Math.abs(row - queen.row) === Math.abs(col - queen.col))) {
                return false;
            }
            markRow[queen.row] = true;
            markCol[queen.col] = true;

        }
        if (markRow[row] === true || markCol[col] === true)
            return false;
        return true;
    }

    place(row, col) {
        let size = this.state.number;
        if (size === 0 || col === size || row < 0 || col < 0) {
            return;
        }
        this.setState(prevState => {
            let queens = [...prevState.queens];
            queens.length = col;
            queens.push({ row, col });
            return {
                queens
            }
        }, () => {
            setTimeout(() => {
                let safe = this.safe(row, col);
                if (safe) {
                    this.place(0, col + 1);
                } else {
                    if (row + 1 === size) {
                        let queens = [...this.state.queens];
                        if (queens.length >= 2) {
                            row = queens[queens.length - 2].row;
                            if (row + 1 === size) {
                                if (queens.length >= 3) {
                                    row = queens[queens.length - 3].row;
                                    this.place(row + 1, col - 2);
                                }
                            } else {
                                this.place(row + 1, col - 1);
                            }
                        }
                    } else {
                        this.place(row + 1, col);
                    }
                }
            }, 1000);
        });
    }

    queens(input) {
        if ((input >= 1 && input <= 36)) {
            this.setState(prevState => {
                return {
                    number: input
                }
            }, () => {
                this.place(0, 0);
            });
        } else {
            alert("Uncomputable");
        }
    }

    render() {
        return (
            <Container>
                <Row className="text-center">
                    <Col sm={6}>
                        <Inp parent={this} />
                    </Col>
                </Row>
                <Row>
                    <Board size={this.state.number} queens={this.state.queens.map(queen => {
                        return queen.row * this.state.number + queen.col;
                    })}>
                    </Board>
                </Row>
            </Container>
        );
    }
}
