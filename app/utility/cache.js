import AsyncStorageLib from "@react-native-async-storage/async-storage";

const prefix = "cache";

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorageLib.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorageLib.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

const resetApp = async () => {
  try {
    await AsyncStorageLib.clear();
  } catch (error) {
    console.log(error);
  }
};

const clear = (params) => {
  params.forEach(async (param) => {
    try {
      await AsyncStorageLib.removeItem(prefix + param);
    } catch (error) {
      console.log(error);
    }
  });
};

export default {
  store,
  get,
  clear,
  resetApp,
};
