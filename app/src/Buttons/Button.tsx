import styles from "./Button.module.css";

export function Button({ ...props }) {
  const size = props.size;
  const border = props.border;
  const type = props.type;

  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[size]} ${styles[border]}`}
    >
      {props.content}
    </button>
  );
}
