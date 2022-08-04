import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(3),
    width: "100%",
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export default function SearchSuggestor(props) {
  const classes = useStyles();
  const [opVal, setOptionValue] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <Autocomplete
        open={open}
        clearOnEscape
        id={props.id}
        onInputChange={(event, value) => {
          setOpen(value ? true : false);
        }}
        onFocus={() => {
          setOpen(true);
        }}
        onBlur={() => {
          setOpen(false);
        }}
        options={props.searchOps}
        value={opVal}
        getOptionLabel={(option) => option.title || option.data || ""}
        renderInput={(params) => (
          <InputBase
            ref={params.InputProps.ref}
            inputProps={params.inputProps}
            placeholder={"Search Page"}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        )}
        onChange={(event, value) => {
          if (value) {
            setOptionValue({ ...value });
            props.updateSelection && props.updateSelection({ ...value });
          }
        }}
        renderOption={(option, { inputValue }) => {
          const matches = match(option.title, inputValue);
          const parts = parse(option.title, matches);

          return (
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{ fontWeight: part.highlight ? 700 : 400 }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          );
        }}
      />
    </div>
  );
}
