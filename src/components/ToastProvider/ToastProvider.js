import React, { createContext, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([
    {
      id: crypto.randomUUID(),
      message: "Oh No!!!",
      variant: "error",
    },
    {
      id: crypto.randomUUID(),
      message: "Logged In!",
      variant: "success",
    },
  ]);

  const createNewToast = (message, variant) => {
    const newToast = [...toasts, { id: crypto.randomUUID(), message, variant }];
    setToasts(newToast);
  };

  const dismissToast = (id) => {
    const newToasts = toasts.filter(toast => toast.id !== id)
    setToasts(newToasts)
  }

  return (
    <ToastContext.Provider value={{ toasts, createNewToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
