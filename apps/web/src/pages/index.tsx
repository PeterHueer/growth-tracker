import Head from "next/head";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col py-2">
      <Head>
        <title>Growth-Track</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex flex-row text-white">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
            <img src="/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          </a>
        </div>
      </nav>
    </div>
  );
}
