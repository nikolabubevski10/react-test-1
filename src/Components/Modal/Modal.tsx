import React from "react";
import { createPortal } from "react-dom";
import "./modal.css";

type ModalProps = {
  title: React.ReactNode;
  footer?: React.ReactNode;
  isOpen?: boolean;
};

export function Modal({
  title,
  isOpen = false,
  footer,
  children,
}: React.PropsWithChildren<ModalProps>) {
  if (!isOpen) {
    return null;
  }

  const modalComponent = (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-backdrop" />
      <div className="modal-container">
        <div className="modal-header">{title}</div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">{footer}</div>
      </div>
    </div>
  );
  return createPortal(modalComponent, document.body);
}
