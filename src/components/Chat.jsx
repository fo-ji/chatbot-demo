import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import noProfile from "../assets/img/no-profile.png";
import Torahack from "../assets/img/torahack.png";

const Chat = (props) => {
  const isQuestion = (props.type === "question");
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return (
    <ListItem classNaem={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Torahack} />
        ) : (
          <Avatar alt="icon" src={noProfile} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  )
}

export default Chat