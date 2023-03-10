import styles from "./headline.module.css";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>
      <div className={styles.description}>
        <p>Get started by editing {props.children}</p>
      </div>
    </div>
  );
}
