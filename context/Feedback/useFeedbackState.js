import { useState, useEffect } from "react";

const useFeedbackState = () => {
  const [snackbarConfig, setSnackbarConfig] = useState({});

  const isKeyPresent = (key) => Object.keys(snackbarConfig).includes(key);

  const handleFeedbackConfigUpdate = (key, updateObject) => {
    if (isKeyPresent(key)) {
      //if key is present, then update the existing config object
      setSnackbarConfig({
        ...snackbarConfig,
        [key]: { ...snackbarConfig[key], ...updateObject },
      });
    } else {
      setSnackbarConfig({
        ...snackbarConfig,
        [key]: { ...updateObject },
      });
    }
  };

  return {
    snackbarConfig,
    handleFeedbackConfigUpdate,
  };
};

export default useFeedbackState;
