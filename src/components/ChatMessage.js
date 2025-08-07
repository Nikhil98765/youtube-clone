import React from 'react';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

export const ChatMessage = ({name, message}) => {
  return (
    <div className="flex p-2">
      <AccountCircleRoundedIcon fontSize="medium" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

