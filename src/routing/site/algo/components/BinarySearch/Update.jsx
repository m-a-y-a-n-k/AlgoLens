import React from "react"
import {
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Alert,
} from "reactstrap"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Button from "@material-ui/core/Button"

class Update extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      position: null,
    }
  }

  render() {
    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Update Value at Position
        </AccordionSummary>
        <AccordionDetails style={{ flexDirection: "column" }}>
          {this.props.parent.state.alert &&
            this.props.parent.state.alert.alertId === this.props.alertId && (
              <Alert
                color={this.props.parent.state.alert.type}
                isOpen={!!this.props.parent.state.alert.text}
                toggle={() => {
                  this.props.parent.setState({ alert: null })
                }}
              >
                {this.props.parent.state.alert.text}
              </Alert>
            )}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Position</InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              placeholder="Position (0-based)"
              onChange={(event) => {
                this.setState({ position: event.target.value })
              }}
              value={this.state.position ?? ""}
            />
          </InputGroup>
          <InputGroup className="mt-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Value</InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              placeholder="Value"
              onChange={(event) => {
                this.setState({ data: event.target.value })
              }}
              value={this.state.data ?? ""}
            />
          </InputGroup>
          <Button
            className="mt-4"
            style={{ backgroundColor: "#403d4a", color: "white" }}
            onClick={() => {
              this.props.parent.update(
                parseFloat(this.state.position),
                this.state.data
              )
              this.setState({ position: null, data: null })
            }}
          >
            Submit
          </Button>
        </AccordionDetails>
      </Accordion>
    )
  }
}

export default Update
