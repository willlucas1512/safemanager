import React from "react";
import PropTypes from "prop-types";

const StatusBar = (props) => {
  return (
    <>
      <span
        style={{
          backgroundColor: `${props.color}`,
          height: "100%",
          width: "5px",
        }}
      ></span>
    </>
  );
};

StatusBar.propTypes = {
  color: PropTypes.string,
};

export default StatusBar;
