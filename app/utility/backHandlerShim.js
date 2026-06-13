import { BackHandler } from "react-native";

// React Native 0.83 removed BackHandler.removeEventListener (addEventListener
// now returns a subscription with .remove()). native-base@3 (unmaintained)
// still calls the old API in useKeyboardDismissable, which crashes its overlays
// (Popover, Select). Restore the old API, tracking subscriptions so removal
// actually works and listeners don't leak. Import this before native-base.
if (typeof BackHandler.removeEventListener !== "function") {
  const subscriptions = new Map();
  const originalAdd = BackHandler.addEventListener.bind(BackHandler);

  BackHandler.addEventListener = (eventType, handler) => {
    const subscription = originalAdd(eventType, handler);
    subscriptions.set(handler, subscription);
    return subscription;
  };

  BackHandler.removeEventListener = (eventType, handler) => {
    const subscription = subscriptions.get(handler);
    if (subscription) {
      subscription.remove();
      subscriptions.delete(handler);
    }
  };
}
