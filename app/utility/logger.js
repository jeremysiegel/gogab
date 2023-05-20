import Bugsnag from "@bugsnag/expo";
//import * as Analytics from "expo-firebase-analytics";

import ExpoMixpanelAnalytics from "@bothrs/expo-mixpanel-analytics";
import setUniqueID from "./setUniqueId";

const mixpanel = new ExpoMixpanelAnalytics("c7b3050ee5bde893af5938391d92f57b");

const identify = (id) => {
  try {
    if (id) {
      mixpanel.identify(id);
    } else {
      // Failsafe -- will only id individual session. Not stored.
      let uuid = "";
      uuid = setUniqueID();
      mixpanel.identify(uuid);
    }
  } catch (error) {
    console.log(error);
  }
};

const logBug = (error) => Bugsnag.notify(error);
// Error format: logger.logBug(new Error('Test error'))

const start = () => Bugsnag.start();

const logEvent = async (eventTitle, paramTitle, data) => {
  try {
    const eventData = {};
    eventData[paramTitle] = data;
    // await Analytics.logEvent(eventTitle, data);
    mixpanel.track(eventTitle, eventData);
  } catch (error) {
    console.log(error);
  }
};

export default { identify, logBug, start, logEvent };
