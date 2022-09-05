import Head from "next/head";
import NavItem from "../components/NavItem";
import Hero from "../components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col pt-5">
      <Head>
        <title>Growth-Track</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex flex-row text-white">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between">
          <a href="#" className="flex items-center">
            <Image width={147} height={40} src="/images/logo.png" />
          </a>
          <div className="flex space-x-8 uppercase">
            <NavItem link="#" highlightedText="My" text="growth" />
            <NavItem link="#" highlightedText="Team" text="growth" />
          </div>
        </div>
      </nav>
      <Hero />
    </div>
  );
}
