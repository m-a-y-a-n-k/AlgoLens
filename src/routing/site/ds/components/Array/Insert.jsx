import React, { useState, useCallback } from "react"
import {
  InputGroup,
  Input,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Alert,
} from "reactstrap"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@material-ui/core"

const Insert = ({ array, updateState, alertId }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [data, setData] = useState(null)
  const [where, setWhere] = useState("Start")
  const [alert, setAlert] = useState(null)

  const toggleDropDown = useCallback(() => {
    setDropdownOpen((prevState) => !prevState)
  }, [])

  const insert = useCallback(() => {
    if (data) {
      const newArr = [...array]
      switch (where.toLowerCase()) {
        case "start":
          newArr.splice(0, 0, data)
          break
        case "end":
        default:
          newArr.splice(newArr.length, 0, data)
      }
      setAlert({ text: "Inserted successfully", type: "success", alertId: 1 })
      updateState({ array: newArr, highlights: [] })
    } else {
      setAlert({ text: "Submission is empty", type: "danger", alertId: 1 })
    }
  }, [array, data, where, updateState])

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        Insert Element
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
          <Input
            onChange={(event) => setData(event.target.value)}
            value={data ?? ""}
          />
          <InputGroupButtonDropdown
            addonType="append"
            isOpen={dropdownOpen}
            toggle={toggleDropDown}
          >
            <DropdownToggle caret>{where}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setWhere("Start")}>
                Start
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => setWhere("End")}>End</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
        <Button
          className="mt-4"
          style={{ backgroundColor: "#403d4a", color: "white" }}
          onClick={() => {
            insert()
            setData(null)
          }}
        >
          Submit
        </Button>
      </AccordionDetails>
    </Accordion>
  )
}

export default Insert
