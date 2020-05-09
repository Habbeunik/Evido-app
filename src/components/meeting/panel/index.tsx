import React from "react";
import { Board, ActionList } from "./elements";
import { MicOff, Video, Phone, Share } from "react-feather";

const actions = [
  {
    Icon: MicOff,
  },
  {
    Icon: Video,
  },
  {
    Icon: Phone,
  },
  {
    Icon: Share,
  },
];

function Panel() {
  return (
    <Board>
      <ActionList actions={actions} />
    </Board>
  );
}

export default Panel;
