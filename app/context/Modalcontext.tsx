"use client";

import React, { createContext, useContext, useState } from "react";

type ModalContextValue = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
};
