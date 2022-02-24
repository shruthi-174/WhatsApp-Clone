import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import { React, useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

//COMPONENTS
import Login from "./Account/Login";
import ChatBox from "./ChatBox";
//USED FOR STYLING
const useStyles = makeStyles({
  component: {
    height: "100vh",
    background: "#DCDCDC",
  },
  loginHeader: {
    height: 200,
    background: "#00bfa5",
    boxShadow: "none",
  },
  header:{
    height: 115,
    background: "#00bfa5",
    boxShadow: "none",
  }
});

//FUNCTION COMPONENT(ARROW FUNCTION)
const Messenger = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  return (
    <Box className={classes.component}>
      <AppBar className={account? classes.header:classes.loginHeader}>
        <Toolbar></Toolbar>
      </AppBar>
      //IF SUCCESSFUL LOGIN THEN REDIRECTED TO CHATBOX OTHERWISE LOGIN
      {account ?<ChatBox />  : <Login />}
    </Box>
  );
};

export default Messenger;
