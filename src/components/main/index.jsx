import styles from "./main.module.css";
import { Headline } from "../headline";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <>
      <main className={styles.main}>
        <Headline page={props.page}>
          {<code className={styles.code}>pages/{props.page}.js</code>}
        </Headline>
      </main>

      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
    </>
  );
}
