import { Button, Heading, Text } from "components/common";
import classes from "./Navbar.module.css";
import { coinbaseWalletLogo, walletIcon2 } from "images";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import useOnClickOutside from "hooks";
import { useAppContext } from "ContextProvider/ContextProvider";
import { PiSidebar } from "react-icons/pi";
import { Link } from "react-router-dom";
const Navbar = ({ setSidebar }) => {
  const { setConnectedWallet, connectedWallet, setShowConnectWalletModal } =
    useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ref = useRef();

  useOnClickOutside(ref, () => setShowDropdown(false));
  return (
    <div className={clsx(classes.wrapper, isScrolled && classes.wrapperBg)}>
      <nav className={classes.nav}>
        <button
          className={classes.sidebarButton}
          onClick={() => setSidebar((prev) => !prev)}
        >
          <PiSidebar />
        </button>
        <Heading primitive25 base medium>
          Claim Airdrop
        </Heading>
        {!connectedWallet && (
          <Button primary sm onClick={() => setShowConnectWalletModal(true)}>
            {" "}
            <img
              src={walletIcon2}
              alt="wallet"
              className={classes.walletIcon}
            />{" "}
            Connect Wallet
          </Button>
        )}
        {connectedWallet && (
          <div
            ref={ref}
            className={classes.userContainer}
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <img src={coinbaseWalletLogo} alt="#" className={classes.logo} />
            <div>
              <Text sm medium className={classes.name}>
                Coinbase
              </Text>
              <Text xs className={classes.address}>
                0x9E9e...c74756
              </Text>
            </div>{" "}
            {showDropdown ? (
              <FaChevronUp className={clsx(classes.upArrow, classes.arrow)} />
            ) : (
              <FaChevronDown className={classes.arrow} />
            )}
            {showDropdown && (
              <div className={classes.dropdown}>
                <button
                  className={classes.dropdownItem}
                  onClick={() => setConnectedWallet(false)}
                >
                  <p className={classes.logout}>Logout</p>
                </button>
                <Link
                  to="/manage-account/profile"
                  className={classes.dropdownItem}
                >
                  Manage Account
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
