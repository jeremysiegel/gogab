import React from "react";

import AppPopover from "./AppPopover";

// Creates a word that user can tap for more information (such as translation or pronunciation).

function LearnWord({ style, children, helpText }) {
  return (
    <AppPopover style={style} displayText={children} popoverText={helpText} />
  );
}

export default LearnWord;
