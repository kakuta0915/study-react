import { Inter } from "@next/font/google";
import styles from "@/styles/main.module.css";
import { Headline } from "../components/headline";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <>
      <main className={styles.main}>
        <Headline page={props.page}>
          {<code className={styles.code}>pages/{props.page}.js</code>}
        </Headline>
      </main>
    </>
  );
}
