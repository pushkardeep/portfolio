import React, { createContext, useState } from "react";

const loadingScreenContext = createContext();

// Create a Provider Component for Loading
const LoadingScreenProvider = ({ children }) => {
  const [isRemoved, setIsRemoved] = useState(false);

  return (
    <loadingScreenContext.Provider value={{ isRemoved, setIsRemoved }}>
      {children}
    </loadingScreenContext.Provider>
  );
};

export { loadingScreenContext, LoadingScreenProvider };
