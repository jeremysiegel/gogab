import React from "react";

import AppPopover from "./AppPopover";

function LearnWord({ style, children, translation }) {
  return (
    <AppPopover
      style={style}
      displayText={children}
      popoverText={translation}
    />
  );
}

export default LearnWord;
