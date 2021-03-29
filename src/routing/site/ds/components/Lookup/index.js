import React, { useState } from "react";
import Table from "../../../../../common/components/Table";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Demo() {
  const classes = useStyles();
  const [formKey, setFormKey] = useState("");
  const helperTextFormKey = formKey.length === 0 ? "Required" : "";
  const [formValue, setFormValue] = useState("");
  const helperTextFormValue = formValue.length === 0 ? "Required" : "";
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [snackBar, setSnackBar] = useState({
    open: false,
    message: "",
  });

  const createData = (key, value) => {
    return { key, value };
  };

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
  ];

  const handleCloseSnackBar = () => {
    setSnackBar({
      open: false,
      message: "",
    });
  };

  const handleDelete = (numSelected) => {
    let temparr = [...rows];
    if (numSelected.length > 0) {
      temparr = temparr.filter((ele) => {
        return !numSelected.includes(ele.key);
      });
      setRows(temparr);
    }
  };

  const handleAddLookup = () => {
    const temp = [...rows];
    const entry = temp.find((e) => {
      return e.key === formKey.trim();
    });
    if (entry) {
      entry.value = formValue.trim();
      setSnackBar({
        open: true,
        message: `Entry has been Updated`,
      });
    } else {
      temp.push(createData(formKey.trim(), formValue.trim()));
      setSnackBar({
        open: true,
        message: `Entry has been created`,
      });
    }
    setRows(temp);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {showForm ? (
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              required
              error={!!helperTextFormKey}
              value={formKey}
              onChange={({ target: { value } }) => {
                setFormKey(value);
              }}
              id="lookup-key-field"
              label="Key"
              placeholder="Enter Lookup key"
              helperText={helperTextFormKey}
              variant="outlined"
            />
            <TextField
              required
              error={!!helperTextFormValue}
              value={formValue}
              onChange={({ target: { value } }) => {
                setFormValue(value);
              }}
              id="lookup-value-field"
              label="Value"
              placeholder="Enter Lookup Value"
              helperText={helperTextFormValue}
              variant="outlined"
            />
          </div>
          <div>
            <IconButton
              color="primary"
              aria-label="checkIcon"
              disabled={helperTextFormKey || helperTextFormValue}
              onClick={() => {
                handleAddLookup();
                setShowForm(false);
              }}
            >
              <CheckIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="closeIcon"
              onClick={() => {
                setShowForm(false);
                setFormKey("");
                setFormValue("");
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </form>
      ) : (
        <Fab
          color="secondary"
          aria-label="addTable"
          size={"medium"}
          onClick={() => {
            setShowForm(true);
          }}
        >
          <AddIcon />
        </Fab>
      )}

      <Table
        allRows={rows}
        rows={filteredRows}
        setFilteredRows={setFilteredRows}
        headCells={headCells}
        deleteHandler={handleDelete}
        title="Lookup Mapping"
      />

      <Snackbar
        open={snackBar?.open || false}
        autoHideDuration={2000}
        onClose={handleCloseSnackBar}
      >
        <Alert onClose={handleCloseSnackBar} severity="success">
          {snackBar?.message || ""}
        </Alert>
      </Snackbar>
    </div>
  );
}
