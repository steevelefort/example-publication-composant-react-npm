import React from "react";
import "./styles/modal.css";

const Modal = ({ children, isOpen, setIsOpen }) => {

  return isOpen ? (
    <div className="myModalContainer">
      <div className="myModal">
        <div className="myModalClose" onClick={ ()=>{ setIsOpen(false) }}>❎</div>
        {children}
      </div>
    </div>    
  ) : null;
}

export default Modal;
