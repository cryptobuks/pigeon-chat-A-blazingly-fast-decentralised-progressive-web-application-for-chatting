import React, { useContext, createContext } from "react";
import useFeedbackState from "./useFeedbackState";

const FeedbackContext = createContext({});

export const useFeedback = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
  return (
    <FeedbackContext.Provider value={useFeedbackState()}>
      {children}
    </FeedbackContext.Provider>
  );
};
