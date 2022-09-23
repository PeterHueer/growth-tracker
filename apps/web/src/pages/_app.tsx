import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import NavItem from "../components/NavItem";
import { useMemo } from "react";
import Link from "next/link";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const componentMemo = useMemo(() => {
    // @ts-ignore https://github.com/vercel/next.js/issues/35986
    return <Component {...pageProps} />;
  }, [Component, pageProps]);
  return (
    <div className="container mx-auto flex min-h-screen flex-col pt-5">
      <Head>
        <title>Growth-Track</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex flex-row pb-5 text-white">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image width={147} height={40} src="/images/logo.png" alt="logo" />
          </Link>
          <div className="flex space-x-8 uppercase">
            <NavItem
              link="/personal"
              highlightedText="Personal"
              text="growth"
            />
            <NavItem link="/team" highlightedText="Growth" text="Overview" />
          </div>
        </div>
      </nav>
      {componentMemo}
    </div>
  );
}
