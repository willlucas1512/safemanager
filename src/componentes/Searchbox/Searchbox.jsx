import React from "react";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = (theme) => ({
  cssLabel: {
    color: "#263238",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#263238",
  },
  "&:hover .MuiOutlinedInput-input": {
    color: "#263238",
  },
});

const Searchbox = (props) => {
  return (
    <TextField
      fullWidth
      size={"small"}
      variant={"outlined"}
      color={"primary"}
      placeholder={"Pesquisar"}
      label="Pesquisar"
      InputLabelProps={{
        classes: {
          root: props.classes.cssLabel,
        },
      }}
      InputProps={{
        classes: {
          notchedOutline: props.classes.notchedOutline,
        },
        endAdornment: (
          <InputAdornment>
            <IconButton color={"primary"}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

Searchbox.propTypes = {};

export default withStyles(styles)(Searchbox);
