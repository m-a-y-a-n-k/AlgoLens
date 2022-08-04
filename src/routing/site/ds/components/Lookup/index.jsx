import React, { lazy, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import { DynamicLoader } from "../../../../base/Router"

const Table = lazy(() => import(`../../../../../common/components/Table`))
const TextField = lazy(() => import(`@material-ui/core/TextField`))
const Alert = lazy(() => import(`@material-ui/lab/Alert`))
const IconButton = lazy(() => import(`@material-ui/core/IconButton`))
const CheckIcon = lazy(() => import(`@material-ui/icons/Check`))
const CloseIcon = lazy(() => import(`@material-ui/icons/Close`))
const Snackbar = lazy(() => import(`@material-ui/core/Snackbar`))

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}))

export default function Demo() {
  const classes = useStyles()
  const [formKey, setFormKey] = useState("")
  const helperTextFormKey = formKey.length === 0 ? "Required" : ""
  const [formValue, setFormValue] = useState("")
  const helperTextFormValue = formValue.length === 0 ? "Required" : ""
  const [rows, setRows] = useState([])
  const [filteredRows, setFilteredRows] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [snackBar, setSnackBar] = useState({
    open: false,
    message: "",
  })

  const createData = (key, value) => {
    return { key, value }
  }

  const headCells = [
    {
      id: "key",
      numeric: false,
      disablePadding: true,
      label: "Lookup Key",
    },
    {
      id: "value",
      numeric: false,
      disablePadding: false,
      label: "Lookup Value",
    },
  ]

  const handleCloseSnackBar = () => {
    setSnackBar({
      open: false,
      message: "",
    })
  }

  const handleDelete = (numSelected) => {
    let temparr = [...rows]
    if (numSelected.length > 0) {
      temparr = temparr.filter((ele) => {
        return !numSelected.includes(ele.key)
      })
      setRows(temparr)
    }
  }

  const handleAddLookup = () => {
    const temp = [...rows]
    const entry = temp.find((e) => {
      return e.key === formKey.trim()
    })
    if (entry) {
      entry.value = formValue.trim()
      setSnackBar({
        open: true,
        message: `Entry has been Updated`,
      })
    } else {
      temp.push(createData(formKey.trim(), formValue.trim()))
      setSnackBar({
        open: true,
        message: `Entry has been created`,
      })
    }
    setRows(temp)
  }

  return (
    <div style={{ textAlign: "center" }}>
      {showForm ? (
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            {DynamicLoader(TextField, {
              required: true,
              error: !!helperTextFormKey,
              value: formKey,
              onChange: ({ target: { value } }) => {
                setFormKey(value)
              },
              id: "lookup-key-field",
              label: "Key",
              placeholder: "Enter Lookup key",
              helperText: helperTextFormKey,
              variant: "outlined",
            })}
            {DynamicLoader(TextField, {
              required: true,
              error: !!helperTextFormValue,
              value: formValue,
              onChange: ({ target: { value } }) => {
                setFormValue(value)
              },
              id: "lookup-value-field",
              label: "Value",
              placeholder: "Enter Lookup Value",
              helperText: helperTextFormValue,
              variant: "outlined",
            })}
          </div>
          <div>
            {DynamicLoader(IconButton, {
              color: "primary",
              "aria-label": "checkIcon",
              disabled: !!(helperTextFormKey || helperTextFormValue),
              onClick: () => {
                handleAddLookup()
                setShowForm(false)
              },
              children: <CheckIcon />,
            })}
            {DynamicLoader(IconButton, {
              color: "primary",
              "aria-label": "closeIcon",
              disabled: !!(helperTextFormKey || helperTextFormValue),
              onClick: () => {
                setShowForm(false)
                setFormKey("")
                setFormValue("")
              },
              children: <CloseIcon />,
            })}
          </div>
        </form>
      ) : (
        <Fab
          color="secondary"
          aria-label="addTable"
          size={"medium"}
          onClick={() => {
            setShowForm(true)
          }}
        >
          <AddIcon />
        </Fab>
      )}

      {DynamicLoader(Table, {
        allRows: rows,
        rows: filteredRows,
        setFilteredRows: setFilteredRows,
        headCells: headCells,
        deleteHandler: handleDelete,
        title: "Lookup Mapping",
      })}

      {DynamicLoader(Snackbar, {
        open: snackBar?.open || false,
        autoHideDuration: 2000,
        onClose: handleCloseSnackBar,
        children: DynamicLoader(Alert, {
          onClose: handleCloseSnackBar,
          severity: "success",
          children: snackBar?.message || "",
        }),
      })}
    </div>
  )
}
