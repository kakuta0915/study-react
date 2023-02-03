import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/footer";
import { Links } from "../components/links";
import { Main } from "../components/main";
import { Header } from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />
      <Main page="About" />

      <Links />

      <Footer />
    </>
  );
}
