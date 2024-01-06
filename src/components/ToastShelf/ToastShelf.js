import React, { useContext } from "react";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const {toasts} = useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts?.map((toast) => {
        const id = crypto.randomUUID();
        
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast variant={toast.variant} id={id}>
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
