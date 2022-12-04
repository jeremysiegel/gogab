import React from "react";

import AppPopover from "./AppPopover";

function LearnWord({ children, translation }) {
  return <AppPopover displayText={children} popoverText={translation} />;
}

export default LearnWord;
