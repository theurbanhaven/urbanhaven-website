"use client";

import React, { createContext, useContext, useState } from "react";

type ModalType = "" | "CONSULT" | "THANKYOU";

type ModalContextValue = {
  modalType: ModalType;
  openConsultModal: () => void;
  openThankYouModal: () => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalType, setModalType] = useState<ModalType>("");

  const openConsultModal = () => setModalType("CONSULT");
  const openThankYouModal = () => setModalType("THANKYOU");
  const closeModal = () => setModalType("");

  return (
    <ModalContext.Provider
      value={{
        modalType,
        openConsultModal,
        openThankYouModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
};
