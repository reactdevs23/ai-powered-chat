import { createContext, useContext, useState } from "react";
import { erpIcon, faqIcon, loadManagementIcon, reportIcon } from "images";
// Create the context
const AppContext = createContext();

// Provider component
export const ContextProvider = ({ children }) => {
  const [showConnectWalletModal, setShowConnectWalletModal] = useState(null); // Simple state management
  const [connectedWallet, setConnectedWallet] = useState();
  const aiCharacters = [
    {
      icon: erpIcon,

      character: "Best Languages for ERP",
    },
    {
      icon: faqIcon,
      character: "FAQ & Knowledge Base",
    },
    {
      icon: reportIcon,
      character: "Team Productivity Reports",
    },
    {
      icon: loadManagementIcon,
      character: "Lead Management & Follow-ups",
    },
  ];
  return (
    <AppContext.Provider
      value={{
        showConnectWalletModal,
        setShowConnectWalletModal,
        connectedWallet,
        setConnectedWallet,
        aiCharacters,
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
