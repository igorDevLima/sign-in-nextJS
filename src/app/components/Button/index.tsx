"use client";
import React from "react";
import styles from "./index.module.sass" 

type Props = {
  label: string;
  handleAction?(): void;
};

function Button({ label, handleAction }: Props) {
  return (
    <button
    className={styles.button}
      onClick={() => {
        handleAction && handleAction();
      }}
    >
      {label}
    </button>
  );
}

export default Button;
