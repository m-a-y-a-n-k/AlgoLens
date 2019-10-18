import React from 'react';
import Element from '../../ui/Element';
import { Container, Row, Col, Card, CardBody, CardHeader, CardTitle, Button, InputGroup, Input, InputGroupAddon, InputGroupText, InputGroupButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

class Insert extends React.Component {

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

    render() {
        return (
            <Card style={{ border: '1px solid rgba(22,45,167,0.9)' }}>
                <CardHeader>Insert</CardHeader>
                <CardBody className="text-center">
                    <CardTitle>Enter data</CardTitle>
                    <br />
                    <InputGroup>
                        <Input onChange={(event) => { this.setState({ data: event.target.value }) }} value={this.state.data ? this.state.data : ''} />
                        <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                            <DropdownToggle caret>
                                {this.state.where}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => { this.setState({ where: 'Start' }) }}>Start</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => { this.setState({ where: 'End' }) }}> End</DropdownItem>
                            </DropdownMenu>
                        </InputGroupButtonDropdown>
                    </InputGroup>
                    <br />
                    <Button onClick={() => { this.props.parent.insert(this.state.data, this.state.where); this.setState({ data: null }) }}>Submit</Button>
                </CardBody>
            </Card>
        );
    }
}

class Delete extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            position: null
        };
    }

    render() {
        return (
            <Card style={{ border: '1px solid rgba(22,45,167,0.9)' }}>
                <CardHeader>Delete</CardHeader>
                <CardBody className="text-center">
                    <CardTitle>Position or Value</CardTitle>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Position</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Position" onChange={(event) => { this.setState({ position: event.target.value, data: null }) }} value={this.state.position ? this.state.position : ''} />
                    </InputGroup>
                    <br />
                    <span>Or</span>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Value</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Value" onChange={(event) => { this.setState({ data: event.target.value, position: null }) }} value={this.state.data ? this.state.data : ''} />
                    </InputGroup>
                    <br />
                    <Button onClick={() => { this.props.parent.delete(this.state.data, this.state.position); this.setState({ data: null, position: null }) }}>Submit</Button>
                </CardBody>
            </Card>
        );
    }
}

class Update extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            position: null
        };
    }

    render() {
        return (
            <Card style={{ border: '1px solid rgba(22,45,167,0.9)' }}>
                <CardHeader>Update</CardHeader>
                <CardBody className="text-center">
                    <CardTitle>Value at Position</CardTitle>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Position</InputGroupText>
                        </InputGroupAddon>
                        <Input type="number" placeholder="Position" onChange={(event) => { this.setState({ position: event.target.value }) }} value={this.state.position ? this.state.position : ''} />
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Value</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Value" onChange={(event) => { this.setState({ data: event.target.value }) }} value={this.state.data ? this.state.data : ''} />
                    </InputGroup>
                    <br />
                    <Button onClick={() => { this.props.parent.update(this.state.position, this.state.data); this.setState({ position: null, data: null }) }}>Submit</Button>
                </CardBody>
            </Card>
        );
    }
}

class Peak extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            start: null,
            end: null
        };
    }

    render() {
        return (
            <Card style={{ border: '1px solid rgba(22,45,167,0.9)' }}>
                <CardHeader>Peak</CardHeader>
                <CardBody className="text-center">
                    <CardTitle>Any One Peak inside Range</CardTitle>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Start</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Start" onChange={(event) => { this.setState({ start: event.target.value }) }} value={this.state.start ? this.state.start : ''} />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>End</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="End" onChange={(event) => { this.setState({ end: event.target.value }) }} value={this.state.end ? this.state.end : ''} />
                    </InputGroup>
                    <br />
                    <Button onClick={() => { this.props.parent.peak(this.state.start, this.state.end); this.setState({ start: null, end: null }) }}>Submit</Button>
                </CardBody>
            </Card>
        );
    }
}


export default class Visuals extends React.Component {

    state = {
        array: [],
        highlights: [],
        iter: 0
    }

    insert(data, where) {
        if (data) {
            let arr = this.state.array;
            switch (where.toLowerCase()) {
                case 'start':
                    arr.splice(0, 0, data);
                    break;
                case 'end':
                default:
                    arr.splice(arr.length, 0, data);
            }
            this.setState({ array: arr, highlights: [] });
        } else {
            alert('Submission is empty');
        }
    }

    delete(data, position) {
        let arr = this.state.array;
        position = parseInt(position);
        if (data) {
            let length = arr.length;
            arr = arr.filter((value) => {
                return value != data;
            });
            if (!arr || arr.length === 0)
                arr = [];
            if (length != arr.length)
                this.setState({ array: arr, highlights: [] });
            else
                alert("Data not found to delete");
        } else if (position >= 0 && position < arr.length) {
            arr = this.state.array;
            arr.splice(position, 1);
            this.setState({ array: arr, highlights: [], iter: 0 });
        } else {
            alert("Unable to delete");
        }
    }

    update(position, value) {
        if (position && value && parseInt(position) <= this.state.array.length - 1 && parseInt(position) >= 0) {
            let arr = this.state.array, highlights = [];
            arr[position] = value;
            highlights.push(parseInt(position));
            this.setState({ array: arr, highlights });
        } else {
            alert("Cannot update");
        }
    }

    isPeak(arr, mid, start, end) {
        let midEle = arr[mid] == parseFloat(arr[mid]) ? parseFloat(arr[mid]) : arr[mid];
        if (mid > start && mid < end) {
            let midMoreEle = arr[mid + 1] == parseFloat(arr[mid + 1]) ? parseFloat(arr[mid + 1]) : arr[mid + 1];
            let midLessEle = arr[mid - 1] == parseFloat(arr[mid - 1]) ? parseFloat(arr[mid - 1]) : arr[mid - 1];

            if (midEle >= midMoreEle && midEle >= midLessEle) {
                return { r: true };
            }
            if (midEle <= midLessEle) {
                return { r: false, d: 'left' };
            }
        }
        else if (mid === start && mid < end) {
            let midMoreEle = arr[mid + 1] == parseFloat(arr[mid + 1]) ? parseFloat(arr[mid + 1]) : arr[mid + 1];
            if (midEle >= midMoreEle) {
                return { r: true };
            }
        }
        else if (mid === end && mid > start) {
            let midLessEle = arr[mid - 1] == parseFloat(arr[mid - 1]) ? parseFloat(arr[mid - 1]) : arr[mid - 1];
            if (midEle >= midLessEle) {
                return { r: true };
            }
            return { r: false, d: 'left' };
        }
        return { r: false, d: 'right' };
    }

    bsPeak(start, end, arr) {
        let mid = parseInt((start) + (end - start) / 2);
        if (start > end) {
            this.setState({ highlights: [] });
            return;
        }
        let { r, d } = this.isPeak(arr, mid, start, end);
        if (r) {
            this.setState((prevState) => {
                let highlights = prevState.highlights;
                highlights = [mid];
                return { highlights, iter: 'Completed' };
            });
        } else if (d === 'right') {
            this.setState((prevState => {
                let highlights = prevState.highlights;
                while (start < mid) {
                    highlights.shift();
                    start++;
                }
                return { highlights, iter: prevState.iter + 1 }
            }), () => {
                setTimeout(
                    () => {
                        this.bsPeak(start, end, arr);
                    },
                    1000
                );
            });
        } else if (d === 'left') {
            this.setState((prevState => {
                let highlights = prevState.highlights;
                while (end > mid) {
                    highlights.pop();
                    end--;
                }
                return { highlights, iter: prevState.iter + 1 }
            }), () => {
                setTimeout(
                    () => {
                        this.bsPeak(start, end, arr);
                    },
                    1000
                );
            });
        }
        return;
    }

    peak(start, end) {
        if (start && end) {
            if (start == Math.floor(start) && end == Math.floor(end)) {
                if (start > end) {
                    alert("Start should be less than end");
                    return;
                }
                if (this.state.array.length > 0) {
                    this.setState(prevState => {
                        let highlights = [], s = Math.floor(start);
                        start = s;
                        end = Math.floor(end);
                        while (s <= end) {
                            highlights.push(s);
                            s++;
                        }
                        return { highlights, iter: 0 };
                    }, () => {
                        setTimeout(
                            () => {
                                this.bsPeak(start, end, this.state.array);
                            },
                            1000
                        );
                    });
                } else {
                    alert("No peak in empty array");
                }
            } else {
                alert("Enter integers only");
            }
        } else {
            alert("Incomplete Range");
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={3}>
                        <Insert parent={this} />
                    </Col>
                    <Col sm={3}>
                        <Delete parent={this} />
                    </Col>
                    <Col sm={3}>
                        <Update parent={this} />
                    </Col>
                    <Col sm={3}>
                        <Peak parent={this} />
                    </Col>
                </Row>
                <Row className="mt-4 mb-4">
                    {
                        this.state.array.map((value, index) => {
                            let highlight = false;
                            if (this.state.highlights.includes(index)) {
                                highlight = true;
                            }
                            return <Element highlight={highlight} key={value + "-" + index} data={{ value, index }} type="array" />
                        })
                    }
                </Row>
                {
                    (parseInt(this.state.iter) > 0 || this.state.iter != "0") &&
                    (<Row className="mt-4 mb-4">
                        Steps : {this.state.iter}
                    </Row>)
                }
            </Container>
        );
    }
}
