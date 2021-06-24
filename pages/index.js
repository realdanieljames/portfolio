import Head from "next/head";
import Header from "../components/Header";
import PortfolioSection from "../components/PortfolioSection";

export default function Home() {
  return (
    <div className="bg-heading_blue ">
      <Head>
        <title>Daniel James Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <video autoPlay loop muted className=" mt-0 min-w-full ">
        <source src="/movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main className="bg-heading_blue h-full lg:grid grid-cols-3 grid-rows-2">
        <div className="grid justify-items-center ">
        <h1 className="text-3xl text-purple-700 font-semibold my-7">Popular Projects </h1>
        </div>
        
        <div className="grid justify-items-center mt-17  mx-24">
          {/* Portfoliio sectin */}
          <PortfolioSection />
        </div>
      </main>
    </div>
  );
}
