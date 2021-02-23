import React from "react";
import Element from "../../../ui/Element";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

class Insert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  render() {
    return (
      <Card style={{ border: "1px solid rgba(22,45,167,0.9)" }}>
        <CardHeader>Sorted Insert</CardHeader>
        <CardBody className="text-center">
          <CardTitle>Enter data</CardTitle>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Value</InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              onChange={(event) => {
                this.setState({ data: event.target.value });
              }}
              value={this.state.data ? this.state.data : ""}
            />
          </InputGroup>
          <br />
          <Button
            onClick={() => {
              this.props.parent.insert(parseFloat(this.state.data));
              this.setState({ data: null });
            }}
          >
            Submit
          </Button>
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
      position: null,
    };
  }

  render() {
    return (
      <Card style={{ border: "1px solid rgba(22,45,167,0.9)" }}>
        <CardHeader>Delete</CardHeader>
        <CardBody className="text-center">
          <CardTitle>Position or Value</CardTitle>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Position</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Position"
              onChange={(event) => {
                this.setState({ position: event.target.value, data: null });
              }}
              value={this.state.position ? this.state.position : ""}
            />
          </InputGroup>
          <br />
          <span>Or</span>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Value</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Value"
              onChange={(event) => {
                this.setState({ data: event.target.value, position: null });
              }}
              value={this.state.data ? this.state.data : ""}
            />
          </InputGroup>
          <br />
          <Button
            onClick={() => {
              this.props.parent.delete(this.state.data, this.state.position);
              this.setState({ data: null, position: null });
            }}
          >
            Submit
          </Button>
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
      position: null,
    };
  }

  render() {
    return (
      <Card style={{ border: "1px solid rgba(22,45,167,0.9)" }}>
        <CardHeader>Update</CardHeader>
        <CardBody className="text-center">
          <CardTitle>Value at Position</CardTitle>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Position</InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              placeholder="Position"
              onChange={(event) => {
                this.setState({ position: event.target.value });
              }}
              value={this.state.position ? this.state.position : ""}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Value</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Value"
              onChange={(event) => {
                this.setState({ data: event.target.value });
              }}
              value={this.state.data ? this.state.data : ""}
            />
          </InputGroup>
          <br />
          <Button
            onClick={() => {
              this.props.parent.update(this.state.position, this.state.data);
              this.setState({ position: null, data: null });
            }}
          >
            Submit
          </Button>
        </CardBody>
      </Card>
    );
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  render() {
    return (
      <Card style={{ border: "1px solid rgba(22,45,167,0.9)" }}>
        <CardHeader>Search</CardHeader>
        <CardBody className="text-center">
          <CardTitle>Data</CardTitle>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Value</InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Value"
              onChange={(event) => {
                this.setState({ data: event.target.value });
              }}
              value={this.state.data ? this.state.data : ""}
            />
          </InputGroup>
          <br />
          <Button
            onClick={() => {
              this.props.parent.search(this.state.data);
              this.setState({ data: null });
            }}
          >
            Submit
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default class BinarySearch extends React.Component {
  state = {
    array: [],
    highlights: [],
    iter: 0,
  };

  insert(data) {
    if (data) {
      let arr = this.state.array,
        i;
      for (i = 0; i < arr.length; i++) {
        if (arr[i] >= data) {
          break;
        }
      }
      arr.splice(i, 0, data);
      this.setState({ array: arr, highlights: [], iter: 0 });
      return i;
    }
    alert("Submission is empty");
    return null;
  }

  delete(data, position) {
    let arr = this.state.array;
    position = parseInt(position);
    if (data) {
      let length = arr.length;
      arr = arr.filter((value) => {
        return value !== data;
      });
      if (!arr || arr.length === 0) arr = [];
      if (length !== arr.length) this.setState({ array: arr, highlights: [] });
      else alert("Data not found to delete");
    } else if (position >= 0 && position < arr.length) {
      arr = this.state.array;
      arr.splice(position, 1);
      this.setState({ array: arr, highlights: [], iter: 0 });
    } else {
      alert("Unable to delete");
    }
  }

  update(position, value) {
    if (
      position &&
      value &&
      parseInt(position) < this.state.array.length &&
      parseInt(position) >= 0
    ) {
      let highlights = [];
      this.delete(null, position);
      position = this.insert(value);
      highlights.push(position);
      this.setState({ highlights, iter: 0 });
    } else {
      alert("Cannot update");
    }
  }

  bs(data, start, mid, end, arr) {
    mid = parseInt(mid);
    if (start > end) return;
    if (arr[mid] === data) {
      this.setState((prevState) => {
        let highlights = prevState.highlights;
        while (start <= end && arr[start] !== data) {
          start++;
          highlights.shift();
        }
        while (end >= start && arr[end] !== data) {
          end--;
          highlights.pop();
        }
        return { highlights, iter: "Completed" };
      });
    } else if (arr[mid] < data) {
      this.setState(
        (prevState) => {
          let highlights = prevState.highlights;
          while (start < mid + 1) {
            highlights.shift();
            start++;
          }
          return { highlights, iter: prevState.iter + 1 };
        },
        () => {
          setTimeout(() => {
            this.bs(data, mid + 1, mid + 1 + (end - mid - 1) / 2, end, arr);
          }, 0.5 * 1000);
        }
      );
    } else {
      this.setState(
        (prevState) => {
          let highlights = prevState.highlights;
          while (end > mid - 1) {
            highlights.pop();
            end--;
          }
          return { highlights, iter: prevState.iter + 1 };
        },
        () => {
          setTimeout(() => {
            this.bs(data, start, start + (mid - 1 - start) / 2, mid - 1, arr);
          }, 0.5 * 1000);
        }
      );
    }
    return;
  }

  search(data) {
    if (data && this.state.array.length > 0) {
      this.setState((prevState) => {
        let highlights = [],
          start = 0,
          end = prevState.array.length - 1;
        while (start <= end) {
          highlights.push(start);
          start++;
        }
        return { highlights, iter: 0 };
      });
      this.bs(
        data,
        0,
        (this.state.array.length - 1) / 2,
        this.state.array.length - 1,
        this.state.array
      );
    } else {
      alert("Empty Search");
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
            <Search parent={this} />
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          {this.state.array.map((value, index) => {
            let highlight = false;
            if (this.state.highlights.includes(index)) {
              highlight = true;
            }
            return (
              <Element
                highlight={highlight}
                key={value + "-" + index}
                data={{ value, index }}
                type="array"
              />
            );
          })}
        </Row>
        {(parseInt(this.state.iter) > 0 || this.state.iter !== "0") && (
          <Row className="mt-4 mb-4">Steps : {this.state.iter}</Row>
        )}
      </Container>
    );
  }
}
