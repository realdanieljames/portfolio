import Head from "next/head";
import Header from "../components/Header";
import PortfolioSection from "../components/PortfolioSection";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Daniel James Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>
<video autoPlay loop muted className="min-w-full">
          <source src="/movie.mp4" type="video/mp4"/>
          Your browser does not support the video tag.

        </video>
    

      {/* <main className="bg-main_container_cream h-screen grid grid-cols-3 gap-4"> */}
      <main className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
          <h1 className="text-3xl text-purple-700">Popular Projects </h1>
        <div>
          {/* Portfoliio sectin */}
          <PortfolioSection/>
        
        </div>
      </main>
    </div>
  );
}
