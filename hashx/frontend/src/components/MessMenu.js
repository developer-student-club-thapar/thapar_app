import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import { Link } from "react-router-dom";

const MessMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Fragment>
      <Paper
        elevation={3}
        style={{
          //   width: "550px",
          borderRadius: "20px",
          textAlign: "center",
          height: "500px",
        }}
      >
        <IconButton
          color="inherit"
          style={{
            height: "35px",
            float: "right",
          }}
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Paper elevation={0} style={{ width: "" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h5 style={{ margin: "auto" }}>
                <i class="fas fa-eye"></i> View More
              </h5>
            </Link>
          </Paper>
        </Popover>
        <br />
        <br />
        <h1 style={{ display: "inline-block" }}>
          <i
            className="fas fa-utensils fa-sm"
            style={{ display: "inline-block" }}
          />{" "}
          Mess Menu
        </h1>
        <br />
        <br />
        <Fade bottom cascade>
          <div>
            <h3 style={{ fontWeight: "bold" }}>Breakfast</h3>
            <h4 style={{ textAlign: "left" }}>
              &nbsp; Food, Food, Food, Food, Food, Food, Food, Food, Food
            </h4>
          </div>
          <br />
          <div>
            <h3 style={{ fontWeight: "bold" }}>Lunch</h3>
            <h4 style={{ textAlign: "left" }}>
              &nbsp; Food, Food, Food, Food, Food, Food, Food, Food, Food
            </h4>
          </div>
          <br />
          <div>
            <h3 style={{ fontWeight: "bold" }}>Dinner</h3>
            <h4 style={{ textAlign: "left" }}>
              &nbsp; Food, Food, Food, Food, Food, Food, Food, Food, Food
            </h4>
          </div>
        </Fade>
      </Paper>
    </Fragment>
  );
};

export default MessMenu;
