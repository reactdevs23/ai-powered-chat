import Modal from "components/common/Modal/Modal";
import classes from "./ConnectWalletModal.module.css";
import { useState } from "react";
import { Button, Input, Text } from "components/common";
import { FaChevronRight } from "react-icons/fa";
import { MdQrCode } from "react-icons/md";

import {
  bitgetWalletLogo,
  coinbaseWalletLogo,
  metaMaskWalletLogo,
  okxWalletLogo,
  trustWalletLogo,
} from "images";
import clsx from "clsx";

const wallets = [
  {
    logo: coinbaseWalletLogo,
    name: "Coinbase Wallet",
    to: "",
  },
  {
    logo: metaMaskWalletLogo,
    name: "MetaMask",
    to: "",
  },
  {
    logo: trustWalletLogo,
    name: "Trust Wallet",
    to: "",
  },
  {
    logo: bitgetWalletLogo,
    name: "Bitget Wallet",
    to: "",
  },
  {
    logo: okxWalletLogo,
    name: "OKX Wallet",
    to: "",
  },
];

const ConnectWalletModal = ({ isActive, onClose, onSelect }) => {
  const [searchValue, setSearchValue] = useState("");

  // Filter wallets based on search input
  const filteredWallets = wallets.filter((wallet) =>
    wallet.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Modal
      isActive={isActive}
      onClose={onClose}
      heading="Connect Wallet"
      className={classes.modal}
    >
      <div className={classes.wrapper}>
        <Input
          type="text"
          name="search"
          placeholder="Search"
          value={searchValue}
          setValue={setSearchValue}
          search
          className={classes.input}
        />

        <div className={clsx(classes.walletsContainer, "overflow")}>
          {filteredWallets.length > 0 ? (
            filteredWallets.map((wallet, i) => (
              <button
                className={clsx(classes.wallet)}
                key={i}
                onClick={() => onSelect(wallet)}
              >
                <img
                  src={wallet.logo}
                  alt={wallet.name}
                  className={classes.logo}
                />
                <Text primitive100 sm textLeft>
                  {wallet.name}
                </Text>
                <FaChevronRight className={classes.arrow} />
              </button>
            ))
          ) : (
            <p className={classes.noResults}>No wallets found</p>
          )}
        </div>
      </div>
      <Button primary className={classes.button}>
        Connect with QR Code <MdQrCode className={classes.qrCodeIcon} />
      </Button>
    </Modal>
  );
};

export default ConnectWalletModal;
