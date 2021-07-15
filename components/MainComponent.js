import Image from "next/image";
import PortfolioSection from "../components/PortfolioSection";

import { MenuIcon } from "@heroicons/react/outline";
function MainComponent() {
  return (
    // ============= Contains the header / navBar of project============================//
    // <header>
      <div className="h-screen">

      <video autoPlay loop muted className=" mt-0 w-full h-2/5 object-cover shadow-xl">
        <source src="/movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <PortfolioSection />




      </div>

  )
}

export default MainComponent;
