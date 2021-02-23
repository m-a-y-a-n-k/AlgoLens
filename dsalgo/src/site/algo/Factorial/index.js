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
import { FaEquals, FaTimes } from "react-icons/fa";

class Inp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: null,
    };
  }
  render() {
    return (
      <Card style={{ border: "1px solid rgba(22,45,167,0.9)" }}>
        <CardHeader>Factorial Of Number</CardHeader>
        <CardBody className="text-center">
          <CardTitle>Number</CardTitle>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Value</InputGroupText>
            </InputGroupAddon>
            <Input
              disabled={this.props.parent.state.disabled}
              type="number"
              placeholder="Factorial Of Number"
              onChange={(event) => {
                this.setState({ input: event.target.value });
              }}
              value={this.state.input ? this.state.input : ""}
            />
          </InputGroup>
          <br />
          <Button
            disabled={this.props.parent.state.disabled}
            onClick={() => {
              this.props.parent.fact(parseInt(this.state.input));
              this.setState({ input: null });
              this.props.parent.setState({ result: null });
            }}
          >
            Submit
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default class Factorial extends React.Component {
  state = {
    input: null,
    result: null,
    processed: null,
    rest: null,
    disabled: false,
  };

  fact(input) {
    if (input >= 0) {
      this.setState(
        (prevState) => {
          if (prevState.input === null) {
            return {
              disabled: true,
              input,
              processed: `${input}`,
              rest: input >= 2 ? input - 1 : 1,
            };
          }
          if (!prevState.processed.includes("X")) {
            return {
              processed: `${prevState.processed} X ${prevState.rest}`,
              rest: prevState.rest - 1,
            };
          } else {
            let processed = prevState.processed.split(" X ");
            processed = parseFloat(processed[0]) * parseFloat(processed[1]);

            if (prevState.rest === 1) {
              return {
                result: `${processed}`,
                input: null,
                disabled: false,
              };
            } else {
              return {
                processed: `${processed}`,
              };
            }
          }
        },
        () => {
          if (this.state.result === null) {
            setTimeout(() => {
              this.fact(this.state.rest);
            }, 0.5 * 1000);
          }
        }
      );
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
        <Row className="text-center mt-4 mb-4">
          {this.state.input && (
            <React.Fragment>
              <Element
                highlight={true}
                data={{ value: `${this.state.input}!` }}
                type="Array"
              />
              <FaEquals style={{ margin: "auto 5px" }} />
              <Element data={{ value: this.state.processed }} type="Array" />
              <FaTimes style={{ margin: "auto 5px" }} />
              <Element data={{ value: `${this.state.rest}!` }} type="Array" />
            </React.Fragment>
          )}
          {this.state.result && (
            <React.Fragment>
              <Element
                highlight={true}
                data={{ value: `${this.state.result}` }}
                type="Array"
              />
            </React.Fragment>
          )}
        </Row>
      </Container>
    );
  }
}
