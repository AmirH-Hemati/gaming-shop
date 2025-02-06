import { CloseSquare } from "iconsax-react";
import { cloneElement, createContext, useContext, useState } from "react";
import { useClickOutSide } from "../hooks/useClickOutSide";

const modalContext = createContext();
function Modal({ children }) {
  const [isOpen, setIsOpen] = useState("");
  function close() {
    setIsOpen("");
  }
  function open(name) {
    setIsOpen(name);
  }
  return (
    <modalContext.Provider value={{ isOpen, close, open }}>
      {children}
    </modalContext.Provider>
  );
}

function Open({ children, openies }) {
  const { open } = useContext(modalContext);
  return cloneElement(children, { onClick: () => open(openies) });
}
function Window({ children, name }) {
  const { close, isOpen } = useContext(modalContext);
  const ref = useClickOutSide(close);
  if (isOpen !== name) return null;
  return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-full h-screen bg-black/50">
      <div
        className="w-full md:w-[90%] py-2 px-1   bg-white flex flex-col md:p-6 rounded-sm  shadow-custom"
        ref={ref}
      >
        <CloseSquare
          size="32"
          color="#FF8A65"
          className="cursor-pointer self-end"
        />
        <div>{cloneElement(children, { onClose: close })}</div>
      </div>
    </div>
  );
}
Modal.Open = Open;
Modal.Window = Window;
export default Modal;
