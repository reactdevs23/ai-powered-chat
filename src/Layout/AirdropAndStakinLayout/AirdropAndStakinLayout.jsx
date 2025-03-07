import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import classses from "./AirdropAndStakinLayout.module.css";
import ConnectWalletModal from "Modals/ConnectWalletModal/ConnectWalletModal";
import { useAppContext } from "ContextProvider/ContextProvider";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import clsx from "clsx";

const AirdropAndStakinLayout = () => {
  const {
    showConnectWalletModal,
    setShowConnectWalletModal,
    connectedWallet,
    setConnectedWallet,
  } = useAppContext();

  const [sidebar, setSidebar] = useState(false);
  return (
    <main className={classses.wrapper}>
      <Navbar setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <div className={clsx(classses.container, "container2")}>
        <Outlet />
      </div>
      <ConnectWalletModal
        isActive={showConnectWalletModal}
        onClose={() => setShowConnectWalletModal(false)}
        onSelect={(val) => {
          setConnectedWallet(val);
          setShowConnectWalletModal(false);
        }}
        selectedWallet={connectedWallet}
        setSelectedWallet={setConnectedWallet}
      />
    </main>
  );
};
export default AirdropAndStakinLayout;
