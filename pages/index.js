import Head from "next/head";
import MainComponent from "../components/MainComponent";
import SideBar from "../components/SideBar";




export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel James Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-5 ">
        {/* ===================================== {{ SiDEBAR }} =============================*/}

        <SideBar />

        {/* ====================== {{ Right COMPONENTT}} ================================================== */}

        <div className="col-span-4 overflow-y-scroll ">
          <MainComponent className="row-span-2"/>
        </div>

        {/* ====================== {{ PORTFOLIO SECTION }} ================================================== */}
      </div>
    </div>
  );
}
