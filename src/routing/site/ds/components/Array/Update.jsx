import React, { useState, useCallback } from "react"
import {
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Alert,
} from "reactstrap"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@material-ui/core"

const Update = ({ array, updateState, alertId }) => {
  const [data, setData] = useState(null)
  const [position, setPosition] = useState(null)
  const [alert, setAlert] = useState(null)

  const update = useCallback(() => {
    const pos = parseInt(position)
    if (pos >= 0 && pos < array.length && data) {
      const newArr = [...array]
      newArr[pos] = data
      setAlert({
        text: "Successfully updated check highlighted element",
        type: "success",
        alertId: 3,
      })
      updateState({ array: newArr, highlights: [pos] })
    } else {
      setAlert({ text: "Invalid update operation", type: "danger", alertId: 3 })
    }
  }, [array, position, data, updateState])

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        Update Element (Value at Position)
      </AccordionSummary>
      <AccordionDetails style={{ flexDirection: "column" }}>
        {alert && alert.alertId === alertId && (
          <Alert
            color={alert.type}
            isOpen={!!alert.text}
            toggle={() => {
              setAlert(null)
            }}
          >
            {alert.text}
          </Alert>
        )}
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Position</InputGroupText>
          </InputGroupAddon>
          <Input
            type="number"
            placeholder="Position"
            onChange={(event) => setPosition(event.target.value)}
            value={position ?? ""}
          />
        </InputGroup>
        <InputGroup className="mt-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Value</InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Value"
            onChange={(event) => setData(event.target.value)}
            value={data ?? ""}
          />
        </InputGroup>
        <Button
          className="mt-4"
          style={{ backgroundColor: "#403d4a", color: "white" }}
          onClick={() => {
            update()
            setPosition(null)
            setData(null)
          }}
        >
          Submit
        </Button>
      </AccordionDetails>
    </Accordion>
  )
}

export default Update
