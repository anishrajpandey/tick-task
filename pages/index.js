import Head from "next/head";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;600;900;&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HeroSection />
    </>
  );
}
