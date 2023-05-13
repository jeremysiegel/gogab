import AsyncStorageLib from "@react-native-async-storage/async-storage";

const prefix = "cached";

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
    const keys = await AsyncStorageLib.getAllKeys();
    clear(keys);
  } catch (error) {
    console.log(error);
  }
};

const clear = async (params) => {
  params.forEach(async (param) => {
    try {
      await AsyncStorageLib.removeItem(param);
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
