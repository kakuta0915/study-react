import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

export function Headline(props) {
  // console.log(props.page);

  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/{props.page}.js</code>
        </p>
      </div>
    </div>
  );
}
