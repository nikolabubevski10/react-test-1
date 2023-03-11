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
    <div className={`modal ${isOpen ? "modal--opened" : ""}`}>
      <div className="modal__backdrop" />
      <div className="modal__container">
        <div className="modal__header">{title}</div>
        <div className="modal__content">{children}</div>
        <div className="modal__footer">{footer}</div>
      </div>
    </div>
  );
  return createPortal(modalComponent, document.body);
}
