import React from 'react';
import Point from '../../ui/Point';
import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, InputGroup, InputGroupButtonDropdown, DropdownToggle, DropdownItem, Button, DropdownMenu } from 'reactstrap';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = null;
    }

    componentDidMount() {
        this.canvas = document.getElementById(this.props.id);
    }

    render() {
        return (
            <canvas id={this.props.id} width={this.props.width} height={this.props.height} style={{ margin: "20px 10.5px", border: '1px solid lightgray', background: 'rgba(123,178,91,0.3)' }} onClick={(event) => {
                if (this.props.clickable) {
                    let p = new Point(this.canvas);
                    p.draw(event);
                    this.props.addPoints({ x: p.x, y: p.y });
                }
            }}></canvas>
        );
    }
}

class Run extends React.Component {

    constructor(props) {
        super(props);

        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
            dropdownOpen: false,
            complexity: 'Select Speed'
        }
    }

    toggleDropDown() {
        let dropdownOpen = this.state.dropdownOpen;
        if (!dropdownOpen) {
            this.setState({ complexity: 'Select Speed' });
        }
        this.setState({
            dropdownOpen: !dropdownOpen
        });

    }

    render() {
        return (
            <Card style={{ border: '1px solid rgba(22,45,167,0.9)' }}>
                <CardHeader>Closest Pair of Points</CardHeader>
                <CardBody className="text-center">
                    <CardTitle>Pair connected by red dash lines</CardTitle>
                    <InputGroup>
                        <InputGroupButtonDropdown style={{ margin: 'auto' }} addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                            <DropdownToggle caret>
                                {this.state.complexity}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => { this.setState({ complexity: 'Slow' }) }}>Slow</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => { this.setState({ complexity: 'Fast' }) }}>Fast</DropdownItem>
                            </DropdownMenu>
                        </InputGroupButtonDropdown>
                    </InputGroup>
                    <br />
                    <Button onClick={() => { this.props.parent.find(this.state.complexity); }}>Run</Button>
                </CardBody>
            </Card>
        );
    }
}


export default class ClosestPair extends React.Component {

    state = {
        points: [],
        clickable: true,
        shortest: null
    }

    componentDidMount() {
        this.canvas = document.getElementById('pointsCanvas');
    }

    drawPoints() {
        let ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "#ff2626"; // Red color

        for (const p of this.state.points) {
            ctx.beginPath(); //Start path
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.font = "15px Arial";
            ctx.fillText(`( ${p.x} , ${p.y} ) `, p.x + 6, p.y + 6);
        }
    }

    drawLine(p, q, stroke) {
        let ctx = this.canvas.getContext("2d");
        ctx.strokeStyle = stroke;
        ctx.setLineDash([2, 2]);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        let length = (q.x - p.x) * (q.x - p.x) + (q.y - p.y) * (q.y - p.y);
        if (!this.state.shortest) {
            this.setState({ shortest: { start: { x: p.x, y: p.y }, end: { x: q.x, y: q.y }, length: length } });
        }
        else if (length < this.state.shortest.length) {
            this.setState({ shortest: { start: { x: p.x, y: p.y }, end: { x: q.x, y: q.y }, length: length } });
        }
        ctx.stroke();
    }

    clearCanvas() {
        const context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    plot(i, j) {
        if (i >= this.state.points.length - 1) {
            this.clearCanvas();
            this.drawPoints();
            if (this.state.shortest)
                this.drawLine(this.state.shortest.start, this.state.shortest.end, '#ff2626');
            this.setState({ clickable: true });
            return;
        }
        if (j === this.state.points.length) {
            i = i + 1;
            j = i;
            setTimeout(() => { this.plot(i, j + 1) }, 2000);
            return;
        }
        this.clearCanvas();
        this.drawPoints();
        this.drawLine(this.state.points[i], this.state.points[j], '#000000');
        if (this.state.shortest)
            this.drawLine(this.state.shortest.start, this.state.shortest.end, '#ff2626');
        setTimeout(() => { this.plot(i, j + 1) }, 2000);
    }

    find(speed) {
        switch (speed.toLowerCase()) {
            case 'slow':
                if (this.state.points.length >= 2) {
                    this.setState({ clickable: false });
                    this.plot(0, 1);
                } else {
                    alert("Not enough points on canvas");
                }
                return;
            default:
                alert("To be implemented");
                return;
        }
    }

    render() {
        return (
            <Container>
                <header className="text-center">
                    <h3 className="p-2">Click in the canvas below to draw points</h3>
                </header>
                <Row>
                    <Col sm={8}>
                        <Canvas id="pointsCanvas" clickable={this.state.clickable} width="700" height="400" addPoints={(p) => {
                            if (this.state.clickable) {
                                let points = [...this.state.points];
                                points.push(p);
                                this.setState({ points });
                            }
                        }} />
                    </Col>
                    <Col sm={3} className="mt-3">
                        <Run parent={this} />
                    </Col>
                </Row>
            </Container>
        );
    }
}