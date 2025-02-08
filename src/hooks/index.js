import { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
export const handleKeyDown = (event) => {
  if (
    !(
      /[0-9]/.test(event.key) ||
      event.key === "Backspace" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "."
    )
  ) {
    event.preventDefault();
  }
};
