import React, { useState } from "react"
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

const Delete = React.memo(({ parent, alertId }) => {
  const [data, setData] = useState(null)
  const [position, setPosition] = useState(null)

  const handlePositionChange = (event) => {
    setPosition(event.target.value)
    setData(null)
  }

  const handleDataChange = (event) => {
    setData(event.target.value)
    setPosition(null)
  }

  const handleSubmit = () => {
    parent.delete(data, parseFloat(position))
    setData(null)
    setPosition(null)
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        Delete Position or Value
      </AccordionSummary>
      <AccordionDetails style={{ flexDirection: "column" }}>
        {parent.alert && parent.alert.alertId === alertId && (
          <Alert
            color={parent.alert.type}
            isOpen={!!parent.alert.text}
            toggle={() => {
              parent.setAlert(null)
            }}
          >
            {parent.alert.text}
          </Alert>
        )}
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Position</InputGroupText>
          </InputGroupAddon>
          <Input
            type="number"
            placeholder="Position (0-based)"
            onChange={handlePositionChange}
            disabled={data !== null}
            value={position ?? ""}
          />
        </InputGroup>
        <InputGroup className="mt-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Value</InputGroupText>
          </InputGroupAddon>
          <Input
            type="number"
            placeholder="Value"
            onChange={handleDataChange}
            disabled={position !== null}
            value={data ?? ""}
          />
        </InputGroup>
        <Button
          className="mt-4"
          style={{ backgroundColor: "#403d4a", color: "white" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </AccordionDetails>
    </Accordion>
  )
})

Delete.displayName = "BinarySearch.Delete"

export default Delete
