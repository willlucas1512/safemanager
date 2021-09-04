import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import Style from "./User.module.scss";

const User = (props) => {
  return (
    <div className={Style.root}>
      <div className={Style.avatarDiv}>
        <Avatar className={Style.avatar}>{props.user.initials}</Avatar>
      </div>
      <Typography variant={"h6"}>
        <b> {props.user.name}</b>
      </Typography>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
