import React from "react";
import {
  Button,
  Drawer,
  Toolbar,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

import addIcon from "../static/addIcon.png";
import avatar from "../static/avatar2.jpg";

import {
  Drafts,
  Inbox,
  Keyboard,
  Send,
  Snooze,
  StarRate,
  VideoCall,
  Videocam,
} from "@material-ui/icons";

const SideBar = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "200px",
    },
    drawer: {
      background: "white",
      width: "300px",
      position: "fixed",
      top: "10%",
      left: 0,
      paddingTop: "1rem",
    },
    list: {
      paddingTop: "4rem",
      display: "block",
      width: "250px",
      marginLeft: "-1.5rem",
    },
    listItem: {
      borderTopRightRadius: "27rem",
      borderBottomRightRadius: "27rem",
      "&:hover": {
        background: "#f2f2f2",
        opacity: 0.4,
      },
    },
    noListItem: {
      borderTopRightRadius: "27rem",
      borderBottomRightRadius: "27rem",
      background: "none",
      "&:hover": {
        background: "none",
        opacity: 0.4,
      },
    },
    activeItem: {
      borderTopRightRadius: "27rem",
      borderBottomRightRadius: "27rem",
      background: "#f3a8a2",
      color: "#D9305",
      fontWeight: 600,
      "&:hover": {
        background: "#f3a8a2",
      },
    },
    text: {
      fontSize: "9px",
      color: "#D93025",
    },
    hoverText: {
      fontSize: "9px",
      color: "#555",
    },
    header: {
      padding: "20px auto",
    },
    btn: {
      position: "absolute",
      borderRadius: "48px",
      background: "#fff",
      textTransform: "lowercase",
      fontFamily: "poppin",
    },
    addIcon: {
      position: "relative",
      width: theme.spacing(4),
      height: theme.spacing(4),
      paddingRight: theme.spacing(1.5),
    },
  }));
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.drawer}>
        <Toolbar className={classes.root}>
          <div className={classes.header}>
            <Button className={classes.btn} variant="contained" size="large">
              <img src={addIcon} className={classes.addIcon} />
              Compose
            </Button>
            <List component="nav" className={classes.list}>
              <ListItem className={classes.activeItem} button>
                <ListItemIcon className={classes.text}>
                  <Inbox />
                </ListItemIcon>
                <ListItemText className={classes.text} primary="Inbox" />
              </ListItem>
              <ListItem className={classes.listItem} button>
                <ListItemIcon className={classes.hoverText}>
                  <StarRate />
                </ListItemIcon>
                <ListItemText className={classes.hoverText} primary="Inbox" />
              </ListItem>
              <ListItem className={classes.listItem} button>
                <ListItemIcon className={classes.hoverText}>
                  <Snooze />
                </ListItemIcon>
                <ListItemText className={classes.hoverText} primary="Snooze" />
              </ListItem>
              <ListItem className={classes.listItem} button>
                <ListItemIcon className={classes.hoverText}>
                  <Send />
                </ListItemIcon>
                <ListItemText className={classes.hoverText} primary="Sent" />
              </ListItem>
              <ListItem className={classes.listItem} button>
                <ListItemIcon className={classes.hoverText}>
                  <Drafts />
                </ListItemIcon>
                <ListItemText className={classes.hoverText} primary="Drafts" />
              </ListItem>
              <Divider />
              <Typography className="push--left">Meet</Typography>
              <ListItem className={classes.listItem} button>
                <ListItemIcon className={classes.hoverText}>
                  <Videocam />
                </ListItemIcon>
                <ListItemText
                  className={classes.hoverText}
                  primary="New meeting"
                />
              </ListItem>
              <ListItem className={classes.listItem} button>
                <ListItemIcon className={classes.hoverText}>
                  <Keyboard />
                </ListItemIcon>
                <ListItemText
                  className={classes.hoverText}
                  primary="Join a meeting"
                />
              </ListItem>
              <br />
              <Divider />
              <br />
              <ListItem className={classes.noListItem} button>
                <ListItemAvatar className={classes.hoverText}>
                  <Avatar src={avatar} />
                </ListItemAvatar>
                <ListItemText className={classes.hoverText} primary="Drafts" />
              </ListItem>
            </List>
          </div>
        </Toolbar>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
