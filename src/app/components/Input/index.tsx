import styles from "./index.module.sass";
import { IconType } from "react-icons";

interface Props {
  type: string;
  placeholder?: string;
  icon?: IconType;
  label?: string;
}

function Input({ type, placeholder, icon: Icon, label }: Props) {
  return (
    <div className={styles.container}>
      <label htmlFor="">{label}</label>
      <div className={styles.inputContainer}>
        {Icon && <Icon className={styles.icon} />}
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
}

export default Input;
