// Lightweight logging shim. Bugsnag and Mixpanel were removed; these
// functions preserve the previous logger API as no-ops (logging to the
// console in dev) so call sites elsewhere don't need to change.

const identify = (id) => {
  if (__DEV__) console.log("[logger] identify", id);
};

const logBug = (error) => {
  if (__DEV__) console.log("[logger] logBug", error);
};

const start = () => {};

const logEvent = (eventTitle, paramTitle, data) => {
  if (__DEV__) console.log("[logger] logEvent", eventTitle, paramTitle, data);
};

export default { identify, logBug, start, logEvent };
