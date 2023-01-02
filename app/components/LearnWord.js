import React from "react";

import AppPopover from "./AppPopover";

function LearnWord({ style, children, helpText }) {
  return (
    <AppPopover style={style} displayText={children} popoverText={helpText} />
  );
}

export default LearnWord;
