import { useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    closeModal,
    openModal,
  };
}
