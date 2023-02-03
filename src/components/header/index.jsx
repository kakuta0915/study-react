import styles from "./header.module.css";
import Link from "next/link";
export function Header() {
  return (
    <header className={styles.header}>
      <Link legacyBehavior href="/">
        <a className={styles.a}>Index</a>
      </Link>

      <Link legacyBehavior href="/about">
        <a className={styles.a}>About</a>
      </Link>
    </header>
  );
}
