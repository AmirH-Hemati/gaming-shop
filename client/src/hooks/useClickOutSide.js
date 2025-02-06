import { useEffect, useRef } from "react";

export function useClickOutSide(handler) {
  const ref = useRef();

  useEffect(() => {
    function handelClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("click", handelClick, true);
    return () => document.removeEventListener("click", handelClick, true);
  }, [handler]);
}
