import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default ScrollToTop;
export const nameInitial = (name) => {
  const parts = name.split(" ");
  if (parts.length < 2) return name; // return the original name if it's not in "Firstname Lastname" format

  const firstNameInitial = parts[0].charAt(0);
  const lastNameInitial = parts[1].charAt(0);

  return `${firstNameInitial}${lastNameInitial}`;
};
export const copyToClipboard = (value) => {
  // Copy deposit address to clipboard
  navigator.clipboard.writeText(value);
};
// utils.js
export function convertMBtoGB(mb) {
  return `${mb / 1024} GB`;
}
