import styles from "./Button.module.css";

export function Button({ ...props }) {
  const size = props.size;
  const type = props.type;

  return (
    <button
      type="button"
      className={`${styles.btn} ${styles[size]} ${styles[type]}`}
    >
      {props.content}
    </button>
  );
}
