import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const StatusLabel = (props) => {
  const SpecialTypography = withStyles({
    root: {
      color: `${props.color}`,
    },
  })(Typography);
  return (
    <SpecialTypography variant={"caption"}>
      <b>{props.value}</b>
    </SpecialTypography>
  );
};

StatusLabel.propTypes = {
  value: PropTypes.string,
};

export default StatusLabel;
