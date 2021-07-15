import Head from "next/head";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import PortfolioSection from "../components/PortfolioSection";

export default function Home() {
  return (
    <div >
      <div className="bg-heading_blue ">
        <Head>
          <title>Daniel James Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="grid grid-cols-5 h-32">
          {/* ===================================== {{ SiDEBAR }} =============================*/}
          <div className="bg-heading_blue border-t-2 border-r-4 border-blue-900 rounded-tr-lg">
            <SideBar />
          </div>
          {/* ====================== {{ Right COMPONENTT}} ================================================== */}
          {/* ====================== {{ Header }} ================================================== */}
          <div className="col-span-4 ">
            <div className=" overflow-y-scroll">

            <Header className="row-span-1 " />
            <PortfolioSection />
            </div>

            {/* ====================== {{ PORTFOLIO SECTION }} ================================================== */}
  

          </div>
        </div>
      </div>
    </div>
  );
}
