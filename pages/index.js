import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
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
    

      <main className=" bg-yellow-300 ">
        <div>
          <h1 className=" text-9xl">? </h1>
        
        </div>
      </main>
    </div>
  );
}
