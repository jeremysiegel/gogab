import Bugsnag from "@bugsnag/expo";
//import * as Analytics from "expo-firebase-analytics";

import ExpoMixpanelAnalytics from "@bothrs/expo-mixpanel-analytics";
import setUniqueID from "./setUniqueId";

const mixpanel = new ExpoMixpanelAnalytics("c7b3050ee5bde893af5938391d92f57b");

const identify = (id) => {
  if (id) {
    //  mixpanel.identify(id);
  } else {
    // Failsafe -- will only id individual session. Not stored.
    let uuid = "";
    uuid = setUniqueID();
    //  mixpanel.identify(uuid);
  }
};

const logBug = (error) => Bugsnag.notify(error);
// Error format: logger.logBug(new Error('Test error'))

const start = () => Bugsnag.start();

const logEvent = async (eventTitle, data) => {
  try {
    // await Analytics.logEvent(eventTitle, data);
    mixpanel.track(eventTitle, data);
  } catch (error) {
    console.log(error);
  }
};

export default { identify, logBug, start, logEvent };
