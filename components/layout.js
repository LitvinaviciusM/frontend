import classNames from "classnames";
import styles from "./layout.module.css";

export function FlexContainer({
  align,
  children,
  className,
  direction,
  justify,
}) {
  return (
    <div
      className={classNames(styles.flexContainer, {
        [styles.row]: direction === "row",
        [styles.column]: direction === "column",
        [styles.alignCenter]: align === "center",
        [styles.justifyCenter]: justify === "center",
        [styles.justifyEvenly]: justify === "evenly",
        [styles.justifySpace]: justify === "space",
        [className]: !!className,
      })}
    >
      {children}
    </div>
  )
}
