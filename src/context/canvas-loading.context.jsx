import React, { createContext, useState } from "react";

const canvasLoadingContext = createContext();

// Create a Provider Component for Loading
const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <canvasLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </canvasLoadingContext.Provider>
  );
};

export { canvasLoadingContext, LoadingProvider };
