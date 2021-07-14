import Head from "next/head";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import PortfolioSection from "../components/PortfolioSection";

export default function Home() {
  return (
    <div>
      <div className="bg-heading_blue ">
        <Head>
          <title>Daniel James Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="grid grid-cols-2">
          {/* ===================================== {{ SiDEBAR }} =============================*/}
          <div>
            <SideBar />
          </div>
          {/* ====================== {{ Header }} ================================================== */}
          <div>
            <Header className="z-10" />

            {/* ====================== {{ PORTFOLIO SECTION }} ================================================== */}
            <main className="bg-heading_blue h-full">
              <div className="grid justify-items-center">
                <h1 className="text-3xl text-purple-700 font-semibold my-7">
                  Popular Projects{" "}
                </h1>
              </div>

              <div className="grid justify-items-center mt-17  mx-24 ">
                <PortfolioSection />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
