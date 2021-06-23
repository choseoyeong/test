import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Icon,
  IconButton,
} from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Logo } from "./Logo.svg";

import HomeIcon from "@material-ui/icons/Home";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../modules/auth";
const useSytles = makeStyles((theme) => ({
  TeamNameContainer: {
    flex: 1,
  },
  button: {
    marginLeft: "180px",
  },
  home: {
    marginRight: 60,
    // fontSize: 40,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));
const Header = withRouter((props) => {
  const classes = useSytles();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <AppBar style={{ backgroundColor: "#ffffff" }}>
        <Toolbar>
          <Logo />

          {auth && !auth.isLoggedIn && (
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              color="primary"
              style={{ color: "white" }}
              // style={{
              //   color: "#6F7383",
              //   background: "white",
              //   fontWeight: 500,
              //   border: "none",
              // }}
              onClick={(e) => {
                e.preventDefault();
                props.history.push("/login");
              }}
            >
              Sign In
            </Button>
          )}
          {auth && auth.isLoggedIn && (
            <Button
              variant="contained"
              color="secondary"
              style={{
                color: "#6F7383",
                background: "white",
                fontWeight: 500,
                border: "none",
              }}
              className={classes.button}
              onClick={(e) => {
                e.preventDefault();
                dispatch(logout());
                props.history.push("/");
              }}
            >
              Sign Out
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
});
export default Header;
