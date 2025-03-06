import { createContext, useContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Provider component
export const ContextProvider = ({ children }) => {
  const [showConnectWalletModal, setShowConnectWalletModal] = useState(null); // Simple state management
  const [connectedWallet, setConnectedWallet] = useState();
  return (
    <AppContext.Provider
      value={{
        showConnectWalletModal,
        setShowConnectWalletModal,
        connectedWallet,
        setConnectedWallet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using the context
export const useAppContext = () => {
  return useContext(AppContext);
};
