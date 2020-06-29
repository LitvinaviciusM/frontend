import styles from "./button.module.css";
import classNames from "classnames";

export function Button({
  children,
  className,
  color,
  onClick,
  type,
}) {
  return (
    <button
      className={classNames(styles.button, {
        [styles.black]: color === "black",
        [className]: !!className,
      })}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
