import { useState } from "react";

const useLocalStorage = (initialValue, key, notStickyArray) => {
  const [value, setValue] = useState(() => {
    // access to create stateful logic for setting the state of values
    if (window.localStorage.getItem(key)) {
        const obj = JSON.parse(window.localStorage.getItem(key))
      return Object.keys(obj).map(i => obj[i])
    }
    // may need to store the initialvalue
    return initialValue;
  });

  const setLocalStorageValue = value => {
    const newValue = { ...value };
    // newValue[notStickyArray[0]].delete();
    // iterate over notSitckArray removing the keys that i dont want to store
    window.localStorage.setItem(key, JSON.stringify(newValue));
    setValue(value);
  };

  // console.log("bk: useLocalStorage.js: value: ", value);

  return [value, setLocalStorageValue];
};

export default useLocalStorage;