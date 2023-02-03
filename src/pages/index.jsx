import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/footer";
import { Links } from "../components/links";
import { Main } from "../components/main";
import { Header } from "../components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      <Main page="index" />

      <Links />

      <Footer />
    </>
  );
}
